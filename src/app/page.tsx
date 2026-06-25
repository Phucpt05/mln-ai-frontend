"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import {
  BookOpen,
  Sparkles,
  Building2,
  TrendingUp,
  Award,
  Layers,
  Home,
  UploadCloud,
  Globe,
  BookMarked
} from "lucide-react";

// --- Components ---
import TabHome from "@/components/TabHome";
import TabCaseStudy from "@/components/TabCaseStudy";
import TabTheory from "@/components/TabTheory";
import TabSummary from "@/components/TabSummary";
import TabAnalysis from "@/components/TabAnalysis";
import TabLesson from "@/components/TabLesson";
import TabQuiz from "@/components/TabQuiz";
import ChatDrawer from "@/components/ChatDrawer";
import UploadModal from "@/components/UploadModal";

export interface SourceChunk {
  document: string;
  chunk_id: string;
  snippet: string;
}

interface Message {
  role: "user" | "assistant";
  content: string;
  sources?: SourceChunk[];
}

interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanations: string[];
}

export default function PresentationApp() {
  // --- States ---
  const [activeTab, setActiveTab] = useState(0);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isUploadOpen, setIsUploadOpen] = useState(false);
  const [chatMessages, setChatMessages] = useState<Message[]>([]);
  const [userInput, setUserInput] = useState("");
  const [sessionId, setSessionId] = useState<string | null>(null);
  const [isChatLoading, setIsChatLoading] = useState(false);

  // --- Global slide navigation state ---
  // SLIDE_COUNTS[i] = number of slides in tab i (1 = single-page, no SlideLayout)
  const SLIDE_COUNTS = [1, 1, 7, 4, 3, 1, 8];
  const [slideIndices, setSlideIndices] = useState<number[]>([0, 0, 0, 0, 0, 0, 0]);

  // Health State
  const [isBackendHealthy, setIsBackendHealthy] = useState<boolean | null>(null);

  // Quiz State
  const [quizQuestions, setQuizQuestions] = useState<QuizQuestion[]>([]);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, number>>({});
  const [showQuizResult, setShowQuizResult] = useState<Record<string, boolean>>({});
  const [isGeneratingQuiz, setIsGeneratingQuiz] = useState(false);
  const [quizDocUsed, setQuizDocUsed] = useState<string | null>(null);

  const chatEndRef = useRef<HTMLDivElement>(null);

  // Check health and keep checking every 10 seconds
  useEffect(() => {
    const checkHealth = async () => {
      const baseUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";
      try {
        const response = await fetch(`${baseUrl}/health`);
        if (response.ok) {
          setIsBackendHealthy(true);
        } else {
          setIsBackendHealthy(false);
        }
      } catch (err) {
        setIsBackendHealthy(false);
      }
    };
    checkHealth();
    const interval = setInterval(checkHealth, 10000);
    return () => clearInterval(interval);
  }, []);

  // --- Global navigation: moves slides + auto-switches tabs ---
  const navStateRef = useRef({ activeTab, slideIndices, SLIDE_COUNTS });
  useEffect(() => {
    navStateRef.current = { activeTab, slideIndices, SLIDE_COUNTS };
  });

  const navigateGlobal = useCallback((direction: "next" | "prev") => {
    const { activeTab: tab, slideIndices: slides, SLIDE_COUNTS: counts } = navStateRef.current;
    const curSlide = slides[tab];
    const maxSlide = counts[tab] - 1;
    const newSlides = [...slides];

    if (direction === "next") {
      if (curSlide < maxSlide) {
        newSlides[tab] = curSlide + 1;
        setSlideIndices(newSlides);
      } else if (tab < counts.length - 1) {
        newSlides[tab + 1] = 0;
        setSlideIndices(newSlides);
        setActiveTab(tab + 1);
      }
    } else {
      if (curSlide > 0) {
        newSlides[tab] = curSlide - 1;
        setSlideIndices(newSlides);
      } else if (tab > 0) {
        newSlides[tab - 1] = counts[tab - 1] - 1;
        setSlideIndices(newSlides);
        setActiveTab(tab - 1);
      }
    }
  }, []);

  const goToSlide = useCallback((tabIdx: number, slideIdx: number) => {
    setSlideIndices(prev => {
      const next = [...prev];
      next[tabIdx] = slideIdx;
      return next;
    });
  }, []);

  // Arrow key handler — plain ← → (no Ctrl needed anymore)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const tag = (document.activeElement as HTMLElement)?.tagName;
      if (tag === "INPUT" || tag === "TEXTAREA") return;
      if (e.key === "ArrowRight") navigateGlobal("next");
      if (e.key === "ArrowLeft") navigateGlobal("prev");
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [navigateGlobal]);


  // Quick prompt click handler
  const handleQuickPrompt = (promptText: string) => {
    setIsChatOpen(true);
    sendChatMessage(promptText);
  };

  // Send message to Backend
  const sendChatMessage = async (textToSend: string) => {
    if (!textToSend.trim()) return;

    const newMessages = [...chatMessages, { role: "user" as const, content: textToSend }];
    setChatMessages(newMessages);
    setUserInput("");
    setIsChatLoading(true);

    const baseUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";

    try {
      const response = await fetch(`${baseUrl}/api/chat`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          query: textToSend,
          session_id: sessionId,
          response_format: "text",
        }),
      });

      if (!response.ok) {
        throw new Error(`Server error: ${response.status}`);
      }

      const data = await response.json();
      if (data.session_id) {
        setSessionId(data.session_id);
      }

      setChatMessages([
        ...newMessages,
        { role: "assistant" as const, content: data.answer, sources: data.sources }
      ]);
    } catch (err: any) {
      console.error("Chat backend connection error:", err.message || err);
      setChatMessages([
        ...newMessages,
        {
          role: "assistant" as const,
          content: `❌ Lỗi kết nối: Tôi không thể liên lạc với máy chủ AI Backend. Hãy kiểm tra lại backend có đang chạy tại ${baseUrl} không.`
        }
      ]);
    } finally {
      setIsChatLoading(false);
    }
  };

  // Generate Questions via Backend AI
  const handleGenerateAIQuestions = async (num: number, level: "easy" | "medium" | "hard") => {
    setIsGeneratingQuiz(true);
    setSelectedAnswers({});
    setShowQuizResult({});
    setQuizDocUsed(null);

    const baseUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";

    try {
      const response = await fetch(`${baseUrl}/api/questions/generate?num_questions=${num}&level=${level}`);
      if (!response.ok) {
        throw new Error("Không thể sinh câu hỏi từ Backend.");
      }
      const data = await response.json();

      // Parse response to fit UI schema
      const formatted: QuizQuestion[] = data.questions.map((q: any) => ({
        id: q.id,
        question: q.question,
        options: q.options,
        correctIndex: q.correct_index,
        explanations: q.explanations
      }));
      setQuizQuestions(formatted);
      setQuizDocUsed(data.document_used || "Tài liệu hệ thống");
    } catch (err: any) {
      console.error("Quiz backend connection error:", err.message || err);
      alert("❌ Lỗi: Không thể tải câu hỏi từ Backend AI. Hãy chắc chắn rằng bạn đã upload tài liệu giáo trình vào backend trước.");
    } finally {
      setIsGeneratingQuiz(false);
    }
  };

  const handleQuizAnswer = (qId: string, optionIdx: number) => {
    setSelectedAnswers({
      ...selectedAnswers,
      [qId]: optionIdx,
    });
    setShowQuizResult({
      ...showQuizResult,
      [qId]: true,
    });
  };

  const resetQuiz = (qId: string) => {
    const nextAnswers = { ...selectedAnswers };
    delete nextAnswers[qId];
    setSelectedAnswers(nextAnswers);

    const nextShowResult = { ...showQuizResult };
    delete nextShowResult[qId];
    setShowQuizResult(nextShowResult);
  };

  // --- Tabs Metadata ---
  const tabs = [
    { label: "Trang chủ", icon: Home },
    { label: "Tình huống", icon: Building2 },
    { label: "Lý thuyết", icon: BookOpen },
    { label: "Phân tích", icon: TrendingUp },
    { label: "Bài học", icon: Layers },
    { label: "Luyện tập (Quiz)", icon: Award },
    { label: "Tổng hợp chương 3", icon: BookMarked },
  ];

  return (
    <div className="flex-1 flex flex-col bg-charcoal-dark text-foreground min-h-screen relative font-sans">

      {/* Background patterns */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(153,27,27,0.15),transparent_50%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(180,83,9,0.08),transparent_50%)] pointer-events-none" />

      {/* TOP HEADER WITH INTEGRATED TABS */}
      <header className="sticky top-0 border-b border-crimson/20 bg-neutral-950/80 backdrop-blur-md z-10">
        <div className="max-w-[1440px] mx-auto h-20 flex items-center justify-between px-6 gap-4">

          {/* Logo & Info */}
          <div className="flex items-center gap-3 shrink-0">
            <div className="h-9 w-9 bg-gradient-to-br from-crimson to-gold rounded-lg flex items-center justify-center shadow-lg shadow-crimson/20">
              <BookOpen className="h-5 w-5 text-white" />
            </div>
            <div className="hidden md:block">
              <div className="flex items-center gap-2">
                <h1 className="font-bold text-sm tracking-wide uppercase bg-gradient-to-r from-neutral-100 via-neutral-300 to-crimson-bright bg-clip-text text-transparent">
                  Kinh tế chính trị Mác - Lênin
                </h1>
                {/* Health Indicator Dot */}
                <div
                  className={`h-2.5 w-2.5 rounded-full ${isBackendHealthy === null
                    ? "bg-neutral-600 animate-pulse"
                    : isBackendHealthy
                      ? "bg-emerald-500 shadow-md shadow-emerald-500/50"
                      : "bg-red-500 shadow-md shadow-red-500/50"
                    }`}
                  title={
                    isBackendHealthy === null
                      ? "Đang kiểm tra kết nối Backend..."
                      : isBackendHealthy
                        ? "Backend hoạt động tốt"
                        : "Mất kết nối Backend!"
                  }
                />
              </div>
              <p className="text-[10px] text-neutral-400">Chương 3:GIÁ TRỊ THẶNG DƯ
                TRONG NỀN KINH TẾ THỊ TRƯỜNG</p>
            </div>
          </div>

          {/* Horizontal Tabs Navigation */}
          <div className="flex-1 flex justify-center overflow-x-auto scrollbar-none px-4">
            <div className="flex space-x-1 py-1">
              {tabs.map((tab, idx) => {
                const IconComponent = tab.icon;
                const isActive = activeTab === idx;
                return (
                  <button
                    key={idx}
                    onClick={() => setActiveTab(idx)}
                    className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs md:text-sm font-semibold tracking-wide transition-all duration-300 cursor-pointer shrink-0 ${isActive
                      ? "bg-crimson text-white shadow-md shadow-crimson/20"
                      : "text-neutral-400 hover:text-white hover:bg-neutral-900/50"
                      }`}
                  >
                    <IconComponent className="h-4 w-4" />
                    <span className="hidden sm:inline">{tab.label}</span>
                    <span className="sm:hidden">{tab.label.split(" ")[0]}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* AI & Upload Controls */}
          <div className="shrink-0 flex items-center gap-2">
            {/* AI Toggle Button */}
            <button
              onClick={() => setIsChatOpen(!isChatOpen)}
              className="flex items-center gap-2 px-3.5 py-2 rounded-full bg-crimson/10 hover:bg-crimson/20 border border-crimson/30 hover:border-crimson/50 text-crimson-bright text-xs font-semibold tracking-wide transition-all duration-300 shadow-md shadow-crimson/5 cursor-pointer"
            >
              <Sparkles className="h-4.5 w-4.5 animate-pulse" />
              <span className="hidden xs:inline">Trợ Lý AI</span>
            </button>
          </div>
        </div>
      </header>

      {/* FULL-PAGE DIRECT CONTENT (NO OUTER CARD FRAME) */}
      <main className="flex-1 max-w-5xl w-full mx-auto px-6 py-8 md:py-12 flex flex-col justify-center animate-fade-in">
        <div className="w-full">
          {(() => {
            const isGlobalPrevDisabled = activeTab === 0 && slideIndices[0] === 0;
            const isGlobalNextDisabled = activeTab === 6 && slideIndices[6] === SLIDE_COUNTS[6] - 1;

            return (
              <>
                {activeTab === 0 && <TabHome onNext={() => navigateGlobal("next")} />}
                {activeTab === 1 && <TabCaseStudy />}
          {activeTab === 2 && (
            <TabTheory
              currentSlide={slideIndices[2]}
              onNext={() => navigateGlobal("next")}
              onPrev={() => navigateGlobal("prev")}
              onGoTo={(idx) => goToSlide(2, idx)}
              globalPrevDisabled={isGlobalPrevDisabled}
              globalNextDisabled={isGlobalNextDisabled}
            />
          )}
          {activeTab === 3 && (
            <TabAnalysis
              onQuickPrompt={handleQuickPrompt}
              currentSlide={slideIndices[3]}
              onNext={() => navigateGlobal("next")}
              onPrev={() => navigateGlobal("prev")}
              onGoTo={(idx) => goToSlide(3, idx)}
              globalPrevDisabled={isGlobalPrevDisabled}
              globalNextDisabled={isGlobalNextDisabled}
            />
          )}
          {activeTab === 4 && (
            <TabLesson
              currentSlide={slideIndices[4]}
              onNext={() => navigateGlobal("next")}
              onPrev={() => navigateGlobal("prev")}
              onGoTo={(idx) => goToSlide(4, idx)}
              globalPrevDisabled={isGlobalPrevDisabled}
              globalNextDisabled={isGlobalNextDisabled}
            />
          )}
          {activeTab === 5 && (
            <TabQuiz
              quizQuestions={quizQuestions}
              selectedAnswers={selectedAnswers}
              showQuizResult={showQuizResult}
              onAnswer={handleQuizAnswer}
              onReset={resetQuiz}
              onGenerateAIQuestions={handleGenerateAIQuestions}
              isGenerating={isGeneratingQuiz}
              documentUsed={quizDocUsed}
            />
          )}
          {activeTab === 6 && (
            <TabSummary
              currentSlide={slideIndices[6]}
              onNext={() => navigateGlobal("next")}
              onPrev={() => navigateGlobal("prev")}
              onGoTo={(idx) => goToSlide(6, idx)}
              globalPrevDisabled={isGlobalPrevDisabled}
              globalNextDisabled={isGlobalNextDisabled}
            />
          )}
              </>
            );
          })()}
        </div>
      </main>

      {/* CHAT AI SLIDE-OUT PANEL (DRAWER) */}
      <ChatDrawer
        isOpen={isChatOpen}
        onClose={() => setIsChatOpen(false)}
        messages={chatMessages}
        isLoading={isChatLoading}
        userInput={userInput}
        onUserInputChange={setUserInput}
        onSubmit={(e) => {
          e.preventDefault();
          sendChatMessage(userInput);
        }}
        onClearChat={() => {
          setChatMessages([]);
          setSessionId(null);
        }}
        chatEndRef={chatEndRef}
      />

      {/* DOCUMENT UPLOAD POPUP MODAL */}
      <UploadModal
        isOpen={isUploadOpen}
        onClose={() => setIsUploadOpen(false)}
      />
    </div>
  );
}

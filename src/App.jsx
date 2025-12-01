
import { useState, useEffect, useCallback } from "react";
import { AnimatedBackground } from "./components/AnimatedBackground";
import { QuoteCard } from "./components/QuoteCard";
import { ActionButtons } from "./components/ActionButtons";
import { LanguageToggle } from "./components/LanguageToggle";
import { CategoryFilter } from "./components/CategoryFilter";
import { categories } from "./data/quotes";
import { fetchQuote } from "./services/api";

function App() {
  const [language, setLanguage] = useState('id');
  const [activeCategory, setActiveCategory] = useState('all');
  const [quote, setQuote] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleNewQuote = useCallback(async () => {
    setIsLoading(true);
    const data = await fetchQuote(language, activeCategory);
    setQuote(data);
    setIsLoading(false);
  }, [language, activeCategory]);

  // Initial load and when filters change
  useEffect(() => {
    let ignore = false;
    
    const fetchData = async () => {
      setIsLoading(true);
      const data = await fetchQuote(language, activeCategory);
      if (!ignore) {
        setQuote(data);
        setIsLoading(false);
      }
    };

    fetchData();
    
    return () => {
      ignore = true;
    };
  }, [language, activeCategory]);

  const handleCopy = () => {
    if (quote) {
      navigator.clipboard.writeText(`"${quote.content}" — ${quote.author}`);
    }
  };

  const handleShare = () => {
    if (quote) {
      const text = encodeURIComponent(`"${quote.content}" — ${quote.author}`);
      window.open(`https://twitter.com/intent/tweet?text=${text}`, "_blank");
    }
  };

  return (
    <main className="relative min-h-screen w-full flex flex-col items-center justify-between overflow-x-hidden selection:bg-purple-500/30 py-8 md:py-12">
      <AnimatedBackground />
      
      <LanguageToggle language={language} onToggle={setLanguage} />

      <div className="z-10 flex flex-col items-center w-full max-w-4xl px-4 flex-grow justify-center mt-12 mb-8">
        <CategoryFilter 
          categories={categories}
          activeCategory={activeCategory}
          onSelect={setActiveCategory}
          language={language}
        />

        <QuoteCard 
          quote={quote?.content} 
          author={quote?.author} 
          isLoading={isLoading} 
        />
        
        <ActionButtons 
          onNewQuote={handleNewQuote} 
          onCopy={handleCopy} 
          onShare={handleShare}
          disabled={isLoading}
        />
      </div>
      
      <footer className="relative z-10 text-slate-500 text-xs md:text-sm font-medium text-center px-4 pb-4">
        Made by Fikri Zandi with MEVN stack
      </footer>
    </main>
  );
}

export default App;

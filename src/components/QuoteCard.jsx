import { motion as Motion, AnimatePresence } from "framer-motion";
import { Quote } from "lucide-react";

export const QuoteCard = ({ quote, author, isLoading }) => {
  return (
    <div className="relative w-full max-w-2xl mx-auto p-8">
      <div className="absolute inset-0 bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 shadow-2xl" />
      
      <div className="relative z-10 flex flex-col items-center text-center min-h-[300px] justify-center">
        <Quote className="w-12 h-12 text-purple-400 mb-8 opacity-50" />
        
        <AnimatePresence mode="wait">
          {isLoading ? (
            <Motion.div
              key="loader"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex flex-col items-center gap-4"
            >
              <div className="w-8 h-8 border-2 border-purple-500 border-t-transparent rounded-full animate-spin" />
              <p className="text-slate-400 text-sm">Finding inspiration...</p>
            </Motion.div>
          ) : (
            <Motion.div
              key={quote}
              initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -20, filter: "blur(10px)" }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="flex flex-col items-center gap-4 md:gap-6"
            >
              <h1 className="text-xl md:text-4xl font-light text-white leading-relaxed tracking-wide">
                "{quote}"
              </h1>
              <div className="w-8 md:w-12 h-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full opacity-50" />
              <p className="text-base md:text-xl text-slate-300 font-medium tracking-wider">
                — {author}
              </p>
            </Motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

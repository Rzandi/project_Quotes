import { motion as Motion } from "framer-motion";
import { RefreshCw, Copy, Share2, Check } from "lucide-react";
import { useState } from "react";
import { cn } from "../lib/utils";

export const ActionButtons = ({ onNewQuote, onCopy, onShare, disabled }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    onCopy();
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6 mt-6 md:mt-8 w-full justify-center">
      <Motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={onNewQuote}
        disabled={disabled}
        className={cn(
          "px-6 md:px-8 py-3 bg-white text-slate-950 rounded-full font-semibold flex items-center gap-2 shadow-lg shadow-white/10 hover:shadow-white/20 transition-all w-full md:w-auto justify-center",
          disabled && "opacity-50 cursor-not-allowed"
        )}
      >
        <RefreshCw className={cn("w-5 h-5", disabled && "animate-spin")} />
        New Quote
      </Motion.button>

      <div className="flex items-center gap-2 bg-white/5 p-1 rounded-full border border-white/10 backdrop-blur-md">
        <Motion.button
          whileHover={{ scale: 1.1, backgroundColor: "rgba(255,255,255,0.1)" }}
          whileTap={{ scale: 0.9 }}
          onClick={handleCopy}
          className="p-3 rounded-full text-white transition-colors relative"
          title="Copy to clipboard"
        >
          {copied ? <Check className="w-5 h-5 text-green-400" /> : <Copy className="w-5 h-5" />}
        </Motion.button>

        <Motion.button
          whileHover={{ scale: 1.1, backgroundColor: "rgba(255,255,255,0.1)" }}
          whileTap={{ scale: 0.9 }}
          onClick={onShare}
          className="p-3 rounded-full text-white transition-colors"
          title="Share on Twitter"
        >
          <Share2 className="w-5 h-5" />
        </Motion.button>
      </div>
    </div>
  );
};

import { motion as Motion } from "framer-motion";
import { cn } from "../lib/utils";

export const CategoryFilter = ({ categories, activeCategory, onSelect, language }) => {
  return (
    <div className="flex flex-wrap justify-center gap-2 mb-8 max-w-2xl mx-auto px-4">
      {categories.map((category) => (
        <button
          key={category.id}
          onClick={() => onSelect(category.id)}
          className={cn(
            "relative px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200",
            activeCategory === category.id
              ? "text-white"
              : "text-slate-400 hover:text-slate-200"
          )}
        >
          {activeCategory === category.id && (
            <Motion.div
              layoutId="activeCategory"
              className="absolute inset-0 bg-white/10 border border-white/20 rounded-full backdrop-blur-sm"
              transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
            />
          )}
          <span className="relative z-10">
            {language === 'en' ? category.labelEn : category.labelId}
          </span>
        </button>
      ))}
    </div>
  );
};

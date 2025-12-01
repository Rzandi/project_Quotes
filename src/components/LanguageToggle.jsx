import { motion as Motion } from "framer-motion";

export const LanguageToggle = ({ language, onToggle }) => {
  return (
    <div className="absolute top-6 right-6 z-50">
      <div className="bg-white/10 backdrop-blur-md p-1 rounded-full border border-white/10 flex relative">
        <Motion.div
          layout
          className="absolute inset-1 w-[calc(50%-4px)] bg-white rounded-full shadow-lg"
          initial={false}
          animate={{
            x: language === 'en' ? 0 : '100%'
          }}
          transition={{ type: "spring", stiffness: 500, damping: 30 }}
        />
        <button
          onClick={() => onToggle('en')}
          className={`relative z-10 px-4 py-1.5 text-sm font-medium transition-colors duration-200 ${
            language === 'en' ? 'text-slate-900' : 'text-slate-300 hover:text-white'
          }`}
        >
          EN
        </button>
        <button
          onClick={() => onToggle('id')}
          className={`relative z-10 px-4 py-1.5 text-sm font-medium transition-colors duration-200 ${
            language === 'id' ? 'text-slate-900' : 'text-slate-300 hover:text-white'
          }`}
        >
          ID
        </button>
      </div>
    </div>
  );
};

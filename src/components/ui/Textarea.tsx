import { AnimatePresence, motion } from "framer-motion";
import { AlertCircle } from "lucide-react";
import React, { useState } from "react";

interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  error?: string;
  icon?: React.ReactNode;
  containerClassName?: string;
}

const Textarea: React.FC<TextareaProps> = ({
  label,
  error,
  icon,
  className = "",
  containerClassName = "",
  id,
  onFocus,
  onBlur,
  disabled,
  ...props
}) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = (e: React.FocusEvent<HTMLTextAreaElement>) => {
    setIsFocused(true);
    onFocus?.(e);
  };

  const handleBlur = (e: React.FocusEvent<HTMLTextAreaElement>) => {
    setIsFocused(false);
    onBlur?.(e);
  };

  return (
    <div className={`group ${containerClassName}`}>
      <motion.label
        htmlFor={id}
        className="block text-sm font-medium text-slate-400 mb-2 flex items-center gap-2"
        animate={{
          x: isFocused ? 5 : 0,
          color: isFocused ? "#ffffff" : "#94a3b8",
        }}
        transition={{ duration: 0.2 }}
      >
        {icon && (
          <motion.div
            animate={
              isFocused
                ? { rotate: [0, -10, 10, 0], scale: 1.1 }
                : { rotate: 0, scale: 1 }
            }
            transition={{ duration: 0.4 }}
          >
            {icon}
          </motion.div>
        )}
        {label}
      </motion.label>

      <motion.div
        whileFocus={{ scale: 1.02 }}
        whileHover={{ scale: 1.01 }}
        transition={{ duration: 0.2 }}
        style={{ perspective: 1000 }}
      >
        <motion.textarea
          id={id}
          disabled={disabled}
          onFocus={handleFocus}
          onBlur={handleBlur}
          whileFocus={{ rotateX: 2 }}
          className={`w-full px-4 py-3 bg-slate-900/50 border ${
            error
              ? "border-red-500 focus:border-red-400"
              : "border-slate-800 focus:border-accent"
          } rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all resize-none disabled:opacity-50 disabled:cursor-not-allowed backdrop-blur-sm ${className}`}
          {...props}
        />
      </motion.div>

      <AnimatePresence>
        {error && (
          <motion.p
            initial={{ opacity: 0, y: -10, x: -10 }}
            animate={{ opacity: 1, y: 0, x: 0 }}
            exit={{ opacity: 0, y: -10, x: -10 }}
            className="text-red-400 text-sm mt-1 flex items-center gap-1"
          >
            <AlertCircle className="w-3 h-3" />
            {error}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Textarea;

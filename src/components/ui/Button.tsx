import { motion } from "framer-motion";
import { Loader2 } from "lucide-react";
import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  variant?: "primary" | "secondary";
  fullWidth?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  isLoading = false,
  leftIcon,
  rightIcon,
  variant = "primary",
  fullWidth = false,
  className = "",
  disabled,
  ...props
}) => {
  const baseStyles =
    "px-8 py-4 font-semibold rounded-xl shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden group flex items-center justify-center gap-2";

  const variants = {
    primary:
      "bg-gradient-to-r from-accent to-purple-500 text-white hover:shadow-accent/50",
    secondary:
      "bg-slate-800 text-white hover:bg-slate-700 border border-slate-700",
  };

  return (
    <motion.button
      disabled={isLoading || disabled}
      whileHover={{
        scale: isLoading || disabled ? 1 : 1.02,
        y: isLoading || disabled ? 0 : -2,
      }}
      whileTap={{ scale: isLoading || disabled ? 1 : 0.98 }}
      className={`${baseStyles} ${variants[variant]} ${
        fullWidth ? "w-full" : ""
      } ${className}`}
      {...props}
    >
      {variant === "primary" && (
        <motion.div
          className="absolute inset-0 bg-white/20"
          initial={{ x: "-100%" }}
          whileHover={{ x: "100%" }}
          transition={{ duration: 0.5 }}
        />
      )}

      <span className="relative z-10 flex items-center gap-2">
        {isLoading && <Loader2 className="w-5 h-5 animate-spin" />}
        {!isLoading && leftIcon}
        {children}
        {!isLoading && rightIcon}
      </span>
    </motion.button>
  );
};

export default Button;

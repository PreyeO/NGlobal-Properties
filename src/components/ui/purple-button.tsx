import type React from "react";
import { Button } from "./button";

interface PurpleButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  action: string;
  className?: string; // make optional
}

const PurpleButton: React.FC<PurpleButtonProps> = ({
  action,
  className,
  ...props
}) => {
  return (
    <Button
      className={`duration-150 cursor-pointer rounded-2xl px-6 py-6 text-lg shadow-md hover:scale-105 transition-transform ${className}`}
      {...props} // spreads onClick, type, etc.
    >
      {action}
    </Button>
  );
};

export default PurpleButton;

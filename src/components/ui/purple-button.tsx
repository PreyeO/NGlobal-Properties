import type React from "react";
import { Button } from "./button";

interface PurpleButtonProps {
  action: string;
}

const PurpleButton: React.FC<PurpleButtonProps> = ({ action }) => {
  return (
    <Button className="  hover:bg-[#4B0082]/90 duration-150 cursor-pointer rounded-2xl px-6 py-6 text-lg shadow-md hover:scale-105 transition-transform bg-[#4B0082] text-white">
      {action}
    </Button>
  );
};

export default PurpleButton;

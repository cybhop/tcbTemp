"use client";

import * as React from "react";
import { Play } from "lucide-react";
import { Button } from "@/components/ui/button";

export type WatchDemoProps = {
  className?: string;
  onClick?: () => void;
};

// Lightweight client component used on multiple trade finance pages
export const WatchDemo: React.FC<WatchDemoProps> = ({ className, onClick }) => {
  return (
    <Button
      type="button"
      variant="outline"
      className={
        className ||
        "border-primary text-primary hover:bg-primary hover:text-primary-foreground"
      }
      onClick={onClick}
    >
      <Play className="mr-2 h-5 w-5" />
      Watch Demo
    </Button>
  );
};
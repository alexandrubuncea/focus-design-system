import * as HeroIcons from "@heroicons/react/24/solid";
import React from "react";

type IconName = keyof typeof HeroIcons;

export interface IconComponentProps {
  icon: IconName;
  size: "20" | "24";
}

export const Icon = ({ icon, size }: IconComponentProps) => {
  const IconComponent = HeroIcons[icon];
  const sizeClass = size === "20" ? "h-5 w-5" : "h-6 w-6";
  return <IconComponent className={sizeClass} />;
};

export default Icon;

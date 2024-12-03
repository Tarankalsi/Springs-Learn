"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ChevronRightIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

interface ResumeCardProps {
  logoUrl: string;
  altText: string;
  title: string;
  subtitle?: string;
  href?: string;
  badges?: readonly string[];
  period: string;
  description?: string;
  selectedIndex?: number;
  setSelectedIndex?: any;
  idx?: any;
  showAccordinIcon?: boolean;
}
export const ResumeCard = ({
  logoUrl,
  altText,
  title,
  subtitle,
  href,
  badges,
  period,
  description,
  selectedIndex,
  setSelectedIndex,
  idx,
  showAccordinIcon = false
}: ResumeCardProps) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    if (description) {
      e.preventDefault();
      setSelectedIndex(idx);
    }
  };

  return (
    <section
      className="block cursor-pointer"
      onClick={handleClick}
    >
      <Card className="flex">
        <div className="flex-none">
          <Avatar className="border size-12 m-auto bg-muted-background dark:bg-foreground">
            <AvatarImage
              src={logoUrl}
              alt={altText}
              className="object-contain"
            />
            <AvatarFallback>{altText[0]}</AvatarFallback>
          </Avatar>
        </div>
        <div className="flex-grow ml-4 items-center flex-col group">
          <CardHeader>
            <div className="flex items-center justify-between gap-x-2 text-base">
              <h3 className="inline-flex items-center justify-center font-semibold leading-4 sm:leading-none text-[11px] sm:text-sm">
                {title}
                {badges && (
                  <span className="sm:inline-flex gap-x-1 hidden">
                    {badges.map((badge, index) => (
                      <Badge
                        variant="secondary"
                        className="align-middle text-[10px] sm:text-xs"
                        key={index}
                      >
                        {badge}
                      </Badge>
                    ))}
                  </span>
                )}
                <ChevronRightIcon
                  className={cn(
                    "size-4 translate-x-0 transform transition-all duration-300 ease-out group-hover:translate-x-1 ",
                    selectedIndex === idx ? "rotate-90" : "rotate-0" , !showAccordinIcon ? "opacity-0 group-hover:hover:opacity-100" : ""
                  )}
                />
              </h3>
              <div className="whitespace-nowrap text-[8px] sm:text-sm tabular-nums text-muted-foreground text-right">
                {period}
              </div>
            </div>
            {subtitle && <div className="font-sans text-[8px] sm:text-xs">{subtitle}</div>}
          </CardHeader>
        
        </div>
      </Card>
      {description && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{
                opacity: selectedIndex === idx ? 1 : 0,

                height: selectedIndex === idx ? "auto" : 0,
              }}
              transition={{
                duration: 0.7,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="mt-2 text-xs sm:text-sm"
            >
              <Badge variant="secondary" className="align-middle text-[10px] sm:text-xs">
                {description}
              </Badge>
            </motion.div>
          )}
    </section>
  );
};

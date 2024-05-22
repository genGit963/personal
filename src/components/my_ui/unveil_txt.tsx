"use client";
import React from "react";
import {
  TextRevealCard,
  TextRevealCardDescription,
  TextRevealCardTitle,
} from "../ui/text-reveal-card";

export function ShowAndRevealText() {
  return (
    <div className="flex items-center justify-center bg-[#0E0E10] h-[10rem] rounded-2xl w-[40rem]">
      <TextRevealCard
        text="Send Mail"
        revealText="See you soon !"
      >
        {/* <TextRevealCardTitle>
          Sometimes, you just need to see it.
        </TextRevealCardTitle> */}
        {/* <TextRevealCardDescription>
          This is a text reveal card. Hover over the card to reveal the hidden
          text.
        </TextRevealCardDescription> */}
      </TextRevealCard>
    </div>
  );
}

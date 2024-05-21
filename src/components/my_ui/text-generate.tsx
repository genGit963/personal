"use client";
import { TextGenerateEffect } from "../ui/text-generate-effect";

const words = `Life is not cool, so you have to be.`;

export function TextGenerateEffectUI() {
  return <TextGenerateEffect words={words} />;
}

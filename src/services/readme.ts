"use client";

const DEFAULT_LANGUAGE = "ja-JP";
const speech = window?.speechSynthesis;
const voices = speech?.getVoices?.().filter(({ lang }) => lang === DEFAULT_LANGUAGE);
const voice = voices?.[0];

export function readme(text: string): void {
    const readme = new SpeechSynthesisUtterance(text);
    readme.voice = voice;
    console.log(voice, text);
    speech?.speak?.(readme);
}
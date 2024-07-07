"use client";

const DEFAULT_LANGUAGE = "ja-JP";
let voice: SpeechSynthesisVoice | null = null

export function readme(text: string): void {
    const speech = window?.speechSynthesis;
    if (!voice) {
        const voices = speech?.getVoices?.().filter(({ lang }) => lang === DEFAULT_LANGUAGE);
        voice = voices?.[2] ?? voices[0];
    }

    const readme = new SpeechSynthesisUtterance(text);
    readme.voice = voice;
    speech?.speak?.(readme);
}
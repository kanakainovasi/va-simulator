"use client";

import { useRef, useEffect } from "react";

interface SideBySideDocViewerProps {
  originalText: string;
  translatedText: string;
  originalLang?: string;
  translatedLang?: string;
}

function countWords(text: string): number {
  return text
    .split(/\s+/)
    .filter((word) => word.length > 0).length;
}

export default function SideBySideDocViewer({
  originalText,
  translatedText,
  originalLang = "English",
  translatedLang = "Indonesian",
}: SideBySideDocViewerProps) {
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);
  const isSyncing = useRef(false);

  const syncScroll = (source: HTMLDivElement, target: HTMLDivElement) => {
    if (isSyncing.current) return;
    isSyncing.current = true;

    const scrollPercent =
      source.scrollTop / (source.scrollHeight - source.clientHeight || 1);
    target.scrollTop =
      scrollPercent * (target.scrollHeight - target.clientHeight);

    requestAnimationFrame(() => {
      isSyncing.current = false;
    });
  };

  useEffect(() => {
    const left = leftRef.current;
    const right = rightRef.current;
    if (!left || !right) return;

    const onLeftScroll = () => syncScroll(left, right);
    const onRightScroll = () => syncScroll(right, left);

    left.addEventListener("scroll", onLeftScroll);
    right.addEventListener("scroll", onRightScroll);

    return () => {
      left.removeEventListener("scroll", onLeftScroll);
      right.removeEventListener("scroll", onRightScroll);
    };
  }, []);

  return (
    <div className="w-full bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
      <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-gray-200 min-h-[400px] max-h-[600px]">
        <div className="flex flex-col">
          <div className="flex items-center justify-between px-4 py-2.5 bg-slate-50 border-b border-gray-200">
            <span className="text-xs font-semibold text-slate-700 uppercase tracking-wide">
              {originalLang}
            </span>
            <span className="text-xs text-slate-400">
              {countWords(originalText)} words
            </span>
          </div>
          <div
            ref={leftRef}
            className="flex-1 overflow-y-auto p-4 text-sm text-gray-800 leading-relaxed whitespace-pre-wrap"
          >
            {originalText}
          </div>
        </div>

        <div className="flex flex-col">
          <div className="flex items-center justify-between px-4 py-2.5 bg-indigo-50/50 border-b border-gray-200">
            <span className="text-xs font-semibold text-indigo-700 uppercase tracking-wide">
              {translatedLang}
            </span>
            <span className="text-xs text-indigo-400">
              {countWords(translatedText)} words
            </span>
          </div>
          <div
            ref={rightRef}
            className="flex-1 overflow-y-auto p-4 text-sm text-gray-800 leading-relaxed whitespace-pre-wrap"
          >
            {translatedText}
          </div>
        </div>
      </div>
    </div>
  );
}

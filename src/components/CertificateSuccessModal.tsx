"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

interface CertificateSuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
  certificateId: string;
  certificateCode: string;
  projectId: string;
}

export default function CertificateSuccessModal({
  isOpen,
  onClose,
  certificateId,
  certificateCode,
  projectId,
}: CertificateSuccessModalProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {isVisible && (
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          {Array.from({ length: 30 }).map((_, i) => (
            <div
              key={i}
              className="confetti-piece absolute animate-bounce"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${1 + Math.random() * 2}s`,
                width: `${6 + Math.random() * 8}px`,
                height: `${6 + Math.random() * 8}px`,
                backgroundColor: [
                  "#f59e0b",
                  "#3b82f6",
                  "#10b981",
                  "#8b5cf6",
                  "#ef4444",
                  "#ec4899",
                ][i % 6],
                borderRadius: Math.random() > 0.5 ? "50%" : "0",
                transform: `rotate(${Math.random() * 360}deg)`,
              }}
            />
          ))}
        </div>
      )}

      <div className="relative z-10 mx-4 w-full max-w-md rounded-xl bg-white p-6 shadow-2xl sm:p-8">
        <div className="text-center">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
            <svg
              className="h-8 w-8 text-green-600"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="3"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 12.75l6 6 9-13.5"
              />
            </svg>
          </div>

          <h3
            className="text-xl font-bold text-slate-800 sm:text-2xl"
            style={{ fontFamily: "Georgia, serif" }}
          >
            Congratulations!
          </h3>

          <p className="mt-2 text-sm text-slate-500">
            Your project has been successfully submitted and your certificate has been generated.
          </p>

          <div className="mt-4 rounded-lg bg-slate-50 p-3">
            <p className="text-xs text-slate-500">Your Certificate Code</p>
            <p className="font-mono text-lg font-bold tracking-wider text-blue-600">
              {certificateCode}
            </p>
          </div>

          <div className="mt-6 flex flex-col gap-3">
            <Link
              href={`/certificate/${certificateId}`}
              className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-4 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-700"
            >
              <svg
                className="mr-2 h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                />
              </svg>
              View Certificate
            </Link>

            <button
              onClick={() => {
                window.open(`/api/certificates/${certificateId}/download`, "_blank");
              }}
              className="inline-flex items-center justify-center rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-50"
            >
              <svg
                className="mr-2 h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
                />
              </svg>
              Download PDF
            </button>

            <button
              onClick={onClose}
              className="text-sm text-slate-400 transition-colors hover:text-slate-600"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

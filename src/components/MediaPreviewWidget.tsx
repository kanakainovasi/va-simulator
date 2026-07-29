"use client";

import { useState } from "react";
import {
  ExternalLink,
  Eye,
  Download,
  FileText,
  Image as ImageIcon,
  X,
  Loader2,
  AlertCircle,
} from "lucide-react";

interface MediaPreviewWidgetProps {
  type: "pdf" | "image" | "link" | "embed";
  url: string;
  title: string;
}

export default function MediaPreviewWidget({
  type,
  url,
  title,
}: MediaPreviewWidgetProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const handleLoad = () => setIsLoading(false);
  const handleError = () => {
    setIsLoading(false);
    setHasError(true);
  };

  if (type === "pdf") {
    return (
      <div className="w-full bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
        <div className="flex items-center justify-between px-4 py-3 bg-slate-50 border-b border-gray-200">
          <div className="flex items-center gap-2 min-w-0">
            <FileText className="w-4 h-4 text-red-500 shrink-0" />
            <span className="text-sm font-medium text-gray-800 truncate">
              {title}
            </span>
          </div>
          <div className="flex items-center gap-1.5 shrink-0">
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded-md hover:bg-gray-100 text-gray-500 hover:text-gray-700 transition-colors"
              title="Open in new tab"
            >
              <ExternalLink className="w-4 h-4" />
            </a>
            <a
              href={url}
              download
              className="p-1.5 rounded-md hover:bg-gray-100 text-gray-500 hover:text-gray-700 transition-colors"
              title="Download"
            >
              <Download className="w-4 h-4" />
            </a>
          </div>
        </div>
        <div className="relative aspect-[4/3] bg-gray-100">
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center">
              <Loader2 className="w-6 h-6 text-gray-400 animate-spin" />
            </div>
          )}
          {hasError ? (
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 text-gray-500">
              <AlertCircle className="w-8 h-8" />
              <p className="text-sm">Failed to load PDF preview</p>
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-indigo-600 hover:underline"
              >
                Open PDF directly
              </a>
            </div>
          ) : (
            <iframe
              src={url}
              className="w-full h-full border-0"
              onLoad={handleLoad}
              onError={handleError}
              title={title}
            />
          )}
        </div>
      </div>
    );
  }

  if (type === "image") {
    return (
      <>
        <div className="w-full bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
          <div className="flex items-center justify-between px-4 py-3 bg-slate-50 border-b border-gray-200">
            <div className="flex items-center gap-2 min-w-0">
              <ImageIcon className="w-4 h-4 text-blue-500 shrink-0" />
              <span className="text-sm font-medium text-gray-800 truncate">
                {title}
              </span>
            </div>
            <div className="flex items-center gap-1.5 shrink-0">
              <button
                onClick={() => setLightboxOpen(true)}
                className="p-1.5 rounded-md hover:bg-gray-100 text-gray-500 hover:text-gray-700 transition-colors"
                title="Preview"
              >
                <Eye className="w-4 h-4" />
              </button>
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 rounded-md hover:bg-gray-100 text-gray-500 hover:text-gray-700 transition-colors"
                title="Open in new tab"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
              <a
                href={url}
                download
                className="p-1.5 rounded-md hover:bg-gray-100 text-gray-500 hover:text-gray-700 transition-colors"
                title="Download"
              >
                <Download className="w-4 h-4" />
              </a>
            </div>
          </div>
          <div className="relative bg-gray-100">
            {isLoading && (
              <div className="absolute inset-0 flex items-center justify-center z-10">
                <Loader2 className="w-6 h-6 text-gray-400 animate-spin" />
              </div>
            )}
            {hasError ? (
              <div className="flex flex-col items-center justify-center gap-2 py-12 text-gray-500">
                <AlertCircle className="w-8 h-8" />
                <p className="text-sm">Failed to load image</p>
              </div>
            ) : (
              <img
                src={url}
                alt={title}
                className="w-full h-auto object-contain max-h-80 cursor-pointer"
                onClick={() => setLightboxOpen(true)}
                onLoad={handleLoad}
                onError={handleError}
              />
            )}
          </div>
        </div>

        {lightboxOpen && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
            onClick={() => setLightboxOpen(false)}
          >
            <button
              onClick={() => setLightboxOpen(false)}
              className="absolute top-4 right-4 text-white/80 hover:text-white"
            >
              <X className="w-8 h-8" />
            </button>
            <img
              src={url}
              alt={title}
              className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        )}
      </>
    );
  }

  if (type === "link") {
    const hostname = (() => {
      try {
        return new URL(url).hostname;
      } catch {
        return url;
      }
    })();

    return (
      <div className="w-full bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
        <div className="flex items-center justify-between px-4 py-3 bg-slate-50 border-b border-gray-200">
          <div className="flex items-center gap-2 min-w-0">
            <ExternalLink className="w-4 h-4 text-emerald-500 shrink-0" />
            <span className="text-sm font-medium text-gray-800 truncate">
              {title}
            </span>
          </div>
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 text-xs text-indigo-600 hover:underline flex items-center gap-1"
          >
            Open <ExternalLink className="w-3 h-3" />
          </a>
        </div>
        <div className="p-4">
          <div className="flex items-center justify-between">
            <div className="min-w-0">
              <p className="text-xs text-gray-400 mb-0.5">Linked URL</p>
              <p className="text-sm text-gray-700 truncate font-mono">{url}</p>
              <p className="text-xs text-gray-400 mt-1">{hostname}</p>
            </div>
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-4 shrink-0 inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-indigo-700 bg-indigo-50 rounded-lg hover:bg-indigo-100 transition-colors"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              Visit
            </a>
          </div>
        </div>
      </div>
    );
  }

  if (type === "embed") {
    return (
      <div className="w-full bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
        <div className="flex items-center justify-between px-4 py-3 bg-slate-50 border-b border-gray-200">
          <div className="flex items-center gap-2 min-w-0">
            <Eye className="w-4 h-4 text-purple-500 shrink-0" />
            <span className="text-sm font-medium text-gray-800 truncate">
              {title}
            </span>
          </div>
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="p-1.5 rounded-md hover:bg-gray-100 text-gray-500 hover:text-gray-700 transition-colors"
            title="Open in new tab"
          >
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
        <div className="relative aspect-video bg-gray-100">
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center">
              <Loader2 className="w-6 h-6 text-gray-400 animate-spin" />
            </div>
          )}
          {hasError ? (
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 text-gray-500">
              <AlertCircle className="w-8 h-8" />
              <p className="text-sm">Failed to load embed</p>
            </div>
          ) : (
            <iframe
              src={url}
              className="w-full h-full border-0"
              onLoad={handleLoad}
              onError={handleError}
              title={title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          )}
        </div>
      </div>
    );
  }

  return null;
}

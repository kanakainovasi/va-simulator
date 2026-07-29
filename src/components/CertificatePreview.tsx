export interface CertificatePreviewProps {
  userName: string;
  projectTitle: string;
  categoryName: string;
  level: string;
  issueDate: string;
  certificateCode: string;
  qrCodeUrl?: string;
}

export default function CertificatePreview({
  userName,
  projectTitle,
  categoryName,
  level,
  issueDate,
  certificateCode,
  qrCodeUrl,
}: CertificatePreviewProps) {
  const levelColor = level.toLowerCase() === 'easy' || level.toLowerCase() === 'beginner'
    ? 'from-emerald-400 to-teal-500'
    : level.toLowerCase() === 'medium' || level.toLowerCase() === 'intermediate'
    ? 'from-amber-400 to-orange-500'
    : 'from-rose-400 to-pink-500';

  return (
    <div
      id="certificate-preview"
      className="relative w-full bg-white overflow-hidden"
      style={{
        aspectRatio: "1.414/1",
        fontFamily: "'Inter', 'Segoe UI', sans-serif",
      }}
    >
      {/* Background gradient border */}
      <div className="absolute inset-0 bg-gradient-to-br from-violet-500 via-fuchsia-500 to-cyan-500 p-1">
        <div className="absolute inset-1 bg-white" />
      </div>

      {/* Inner content */}
      <div className="relative m-2 sm:m-4 md:m-6 bg-white">
        {/* Decorative corner elements */}
        <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-violet-100 to-transparent rounded-br-full" />
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-fuchsia-100 to-transparent rounded-bl-full" />
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-cyan-100 to-transparent rounded-tr-full" />
        <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-pink-100 to-transparent rounded-tl-full" />

        {/* Content */}
        <div className="relative flex flex-col items-center justify-between p-6 sm:p-8 md:p-12 min-h-[500px]">
          {/* Header */}
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-violet-100 to-fuchsia-100 text-violet-700 text-xs font-medium mb-4">
              <span className="w-2 h-2 rounded-full bg-violet-500" />
              Virtual Work Simulator
            </div>
            <h1
              className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-violet-600 via-fuchsia-600 to-cyan-600 bg-clip-text text-transparent"
              style={{ fontFamily: "Georgia, serif" }}
            >
              CERTIFICATE
            </h1>
            <p className="text-sm sm:text-base text-muted-foreground mt-1 tracking-wider">
              OF COMPLETION
            </p>
          </div>

          {/* Subtitle */}
          <div className="text-center">
            <p className="text-xs sm:text-sm text-muted-foreground">
              This is to certify that
            </p>
          </div>

          {/* Presented To */}
          <div className="text-center">
            <h2
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-800 mb-2"
              style={{ fontFamily: "Georgia, serif" }}
            >
              {userName}
            </h2>
            <div className="mx-auto h-0.5 w-48 bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-400 rounded-full" />
          </div>

          {/* Project Info */}
          <div className="text-center">
            <p className="text-xs sm:text-sm text-muted-foreground mb-2">
              has successfully completed the project
            </p>
            <h3
              className="text-lg sm:text-xl md:text-2xl font-bold text-slate-700 mb-3"
              style={{ fontFamily: "Georgia, serif" }}
            >
              {projectTitle}
            </h3>
            <div className="flex items-center justify-center gap-3 text-sm">
              <span className="px-3 py-1 rounded-full bg-violet-100 text-violet-700 font-medium">
                {categoryName}
              </span>
              <span className={`px-3 py-1 rounded-full bg-gradient-to-r ${levelColor} text-white font-medium`}>
                {level}
              </span>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="flex w-full items-end justify-between mt-4">
            {/* Left - Date & Code */}
            <div className="text-center">
              <div className="mx-auto h-0.5 w-24 bg-gradient-to-r from-slate-300 to-transparent rounded-full" />
              <p className="mt-2 text-xs sm:text-sm text-slate-600 font-medium">{issueDate}</p>
              <p className="text-[10px] tracking-wider text-slate-400 mt-0.5">
                {certificateCode}
              </p>
            </div>

            {/* Center - QR Code */}
            <div className="flex flex-col items-center">
              {qrCodeUrl ? (
                <div className="p-2 rounded-xl bg-gradient-to-br from-violet-50 to-fuchsia-50 border border-violet-100">
                  <img
                    src={qrCodeUrl}
                    alt="QR Code"
                    className="h-12 w-12 sm:h-16 sm:w-16"
                    crossOrigin="anonymous"
                  />
                </div>
              ) : (
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border-2 border-dashed border-violet-200 bg-violet-50 sm:h-16 sm:w-16">
                  <span className="text-[8px] text-violet-400">QR</span>
                </div>
              )}
              <p className="mt-1.5 text-[8px] text-slate-400">Scan to Verify</p>
            </div>

            {/* Right - Signature */}
            <div className="text-center">
              <div className="mx-auto h-0.5 w-24 bg-gradient-to-r from-transparent to-slate-300 rounded-full" />
              <p className="mt-2 text-xs sm:text-sm text-slate-600 font-medium">Program Director</p>
              <p className="text-[10px] text-slate-400 mt-0.5">Virtual Work Simulator</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

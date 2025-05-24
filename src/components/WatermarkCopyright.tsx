// src/components/WatermarkCopyright.tsx


// Copyright-style footer with proper spacing
export function WatermarkCopyright() {
  return (
    <div className="bottom-0 left-0 w-full py-2 text-center text-xs z-50 pointer-events-none select-none bg-black/70 backdrop-blur-sm border-t border-purple-500/20">
      <span className="text-gray-400/70">
        © {new Date().getFullYear()} All rights reserved by Venty Roleplay <span className="mx-1">•</span> Designed by <span className="font-semibold text-orange-400">Codanate Co.</span>
      </span>
    </div>
  );
}

export default WatermarkCopyright;
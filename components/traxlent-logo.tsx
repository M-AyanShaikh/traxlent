export const TraxlentLogo = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      viewBox="0 0 180 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Traxlent"
      {...props}
    >
      {/* T mark — small geometric accent */}
      <rect x="0" y="0" width="4" height="24" fill="#FFC700" />
      <rect x="0" y="0" width="14" height="4" fill="#FFC700" />
      {/* Wordmark */}
      <text
        x="20"
        y="22"
        fontFamily="'Geist Mono', monospace"
        fontSize="20"
        fontWeight="600"
        letterSpacing="0.04em"
        fill="white"
      >
        TRAXLENT
      </text>
    </svg>
  );
};

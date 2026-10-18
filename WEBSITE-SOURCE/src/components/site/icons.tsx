/**
 * Parts-list line icons. 1.5px stroke, 28px box, currentColor.
 * Decorative — hidden from screen readers.
 */

type IconProps = {
  className?: string;
};

function Svg({
  className = "",
  children,
}: IconProps & { children: React.ReactNode }) {
  return (
    <svg
      viewBox="0 0 28 28"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      className={className}
    >
      {children}
    </svg>
  );
}

/** Missed-Call Texter — a drip */
export function IconDrip({ className = "" }: IconProps) {
  return (
    <Svg className={className}>
      <path d="M14 4.5c3.2 4.2 6.5 7.6 6.5 11.2a6.5 6.5 0 1 1-13 0C7.5 12.1 10.8 8.7 14 4.5Z" />
      <path d="M11 16.5a3 3 0 0 0 2.4 2.9" />
    </Svg>
  );
}

/** Review Robot — the wrench */
export function IconWrench({ className = "" }: IconProps) {
  return (
    <Svg className={className}>
      <path d="M20.7 7.3a5.5 5.5 0 0 1-7.1 7.1L7.6 20.4a2.1 2.1 0 0 1-3-3l6-6a5.5 5.5 0 0 1 7.1-7.1l-3.2 3.2 2.9 2.9 3.3-3.1Z" />
    </Svg>
  );
}

/** Invoice Chaser — the receipt */
export function IconReceipt({ className = "" }: IconProps) {
  return (
    <Svg className={className}>
      <path d="M7 4h14v18.5l-2.3-1.6-2.3 1.6-2.4-1.6-2.3 1.6-2.4-1.6L7 22.5V4Z" />
      <path d="M10.5 9h7M10.5 12.5h7M10.5 16h4" />
    </Svg>
  );
}

/** 24/7 Receptionist — the bell */
export function IconBell({ className = "" }: IconProps) {
  return (
    <Svg className={className}>
      <path d="M14 5a6 6 0 0 1 6 6v3.5l1.8 3.2a.8.8 0 0 1-.7 1.2H6.9a.8.8 0 0 1-.7-1.2L8 14.5V11a6 6 0 0 1 6-6Z" />
      <path d="M11.5 21.5a2.6 2.6 0 0 0 5 0" />
    </Svg>
  );
}

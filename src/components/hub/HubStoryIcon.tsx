type HubStoryIconProps = {
  name: string;
  className?: string;
};

/** Small editorial icons for hub story beats (Investors — D-0173). */
export function HubStoryIcon({ name, className }: HubStoryIconProps) {
  const common = {
    className,
    viewBox: "0 0 24 24",
    fill: "none",
    "aria-hidden": true as const,
    focusable: false as const,
  };

  switch (name) {
    case "potential":
      return (
        <svg {...common}>
          <path
            d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M5.6 18.4l2.1-2.1M16.3 7.7l2.1-2.1"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="square"
          />
          <circle cx="12" cy="12" r="3.25" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      );
    case "care":
      return (
        <svg {...common}>
          <path
            d="M12 20.5c-4.2-3.2-7-6.1-7-9.4A3.9 3.9 0 0 1 12 7.8a3.9 3.9 0 0 1 7 3.3c0 3.3-2.8 6.2-7 9.4Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinejoin="miter"
          />
        </svg>
      );
    case "horizon":
      return (
        <svg {...common}>
          <path
            d="M3 16h18M5 16V10l4 3 3-5 4 4 3-2v6"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="square"
            strokeLinejoin="miter"
          />
          <circle cx="18.5" cy="6.5" r="1.6" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      );
    case "growth":
      return (
        <svg {...common}>
          <path
            d="M4 18V6M4 18h16"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="square"
          />
          <path
            d="M7 14V11M11 14V8M15 14V9.5M19 14v-2.5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="square"
          />
        </svg>
      );
    default:
      return (
        <svg {...common}>
          <rect
            x="5"
            y="5"
            width="14"
            height="14"
            stroke="currentColor"
            strokeWidth="1.5"
          />
        </svg>
      );
  }
}

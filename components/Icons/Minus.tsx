import React, { ReactElement } from "react";

export default function Minus(
  props: React.SVGProps<SVGSVGElement>
): ReactElement {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M20 12H4"
      />
    </svg>
  );
}

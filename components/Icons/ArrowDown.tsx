import * as React from "react";

function ArrorDown(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      stroke="currentColor"
      fill="none"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={props.strokeWidth ? props.strokeWidth : 2}
        d="M19 9l-7 7-7-7"
      />
    </svg>
  );
}

export default ArrorDown;

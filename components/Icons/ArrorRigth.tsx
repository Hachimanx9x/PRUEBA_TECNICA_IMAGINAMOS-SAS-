import * as React from "react";

function ArrorRigth(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 31.49 31.49"
      strokeWidth={props.strokeWidth ? props.strokeWidth : "1px"}
    >
      <path
        d="M21.205 5.007a1.112 1.112 0 00-1.587 0 1.12 1.12 0 000 1.571l8.047 8.047H1.111A1.106 1.106 0 000 15.737c0 .619.492 1.127 1.111 1.127h26.554l-8.047 8.032c-.429.444-.429 1.159 0 1.587a1.112 1.112 0 001.587 0l9.952-9.952a1.093 1.093 0 000-1.571l-9.952-9.953z"
        fill={props.fill ? props.fill : "#1e201d"}
      />
    </svg>
  );
}

export default ArrorRigth;

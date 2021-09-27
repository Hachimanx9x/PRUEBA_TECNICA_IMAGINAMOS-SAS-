import * as React from "react";

function Car(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 350"
      stroke="currentColor"
    >
      <path d="M477.4 193.036l-88.329-13.4-84.592-69.616A44.128 44.128 0 00276.53 100H159.38a43.778 43.778 0 00-34.36 16.514L74.232 180H40a36.04 36.04 0 00-36 36v40a44.049 44.049 0 0044 44h21.413a51.988 51.988 0 00101.174 0h186.826a51.988 51.988 0 00101.174 0H472a36.04 36.04 0 0036-36v-35.37a35.794 35.794 0 00-30.6-35.594zm-188.165-64.48L351.748 180H236v-56h40.53a20.068 20.068 0 0112.705 4.556zM143.762 131.5a19.9 19.9 0 0115.618-7.5H164v56h-59.033zM120 316a28 28 0 1128-28 28.032 28.032 0 01-28 28zm288 0a28 28 0 1128-28 28.032 28.032 0 01-28 28zm76-52a12.013 12.013 0 01-12 12h-13.413a51.988 51.988 0 00-101.174 0H170.587a51.988 51.988 0 00-101.174 0H48a20.023 20.023 0 01-20-20v-40a12.013 12.013 0 0112-12h136a12 12 0 0012-12v-68h24v68a12 12 0 0012 12h165.684l84.116 12.764A12.081 12.081 0 01484 228.63z" />
    </svg>
  );
}

export default Car;

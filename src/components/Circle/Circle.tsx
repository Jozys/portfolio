import React from "react";

export interface CircleProps {
  color: string;
}
export default function Circle(props: CircleProps) {
  const { color } = props;
  return (
    <div>
      <svg height="20" width="20">
        <circle
          cx="10"
          cy="10"
          r="10"
          stroke="black"
          stroke-width="1"
          fill={color}
        />
        Sorry, your browser does not support inline SVG.
      </svg>
    </div>
  );
}

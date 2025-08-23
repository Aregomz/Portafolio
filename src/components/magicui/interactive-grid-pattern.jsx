"use client";
import React, { useState } from "react";

export function InteractiveGridPattern({
  width = 100,
  height = 100,
  squares = [25, 25],
  className,
  ...props
}) {
  const [horizontal, vertical] = squares;
  const [hoveredSquare, setHoveredSquare] = useState(null);

  // Crear rombos en lugar de cuadrados
  const createRhombus = (x, y, size) => {
    const halfSize = size / 2;
    return [
      `${x + halfSize},${y}`,           // punto superior
      `${x + size},${y + halfSize}`,    // punto derecho
      `${x + halfSize},${y + size}`,    // punto inferior
      `${x},${y + halfSize}`            // punto izquierdo
    ].join(' ');
  };

  return (
    <div className={`absolute inset-0 w-full h-full ${className}`} {...props}>
      <svg
        width="100%"
        height="100%"
        className="w-full h-full"
        preserveAspectRatio="none"
        viewBox={`0 0 ${width * horizontal} ${height * vertical}`}
      >
        {Array.from({ length: horizontal * vertical }).map((_, index) => {
          const x = (index % horizontal) * width;
          const y = Math.floor(index / horizontal) * height;
          
          return (
            <polygon
              key={index}
              points={createRhombus(x, y, width)}
              className="stroke-white/20 fill-transparent transition-all duration-300 ease-out"
              style={{
                fill: hoveredSquare === index ? 'rgba(255, 255, 255, 0.2)' : 'transparent',
                filter: hoveredSquare === index ? 'drop-shadow(0 0 12px rgba(255,255,255,0.4))' : 'none',
                transform: hoveredSquare === index ? 'scale(1.1)' : 'scale(1)'
              }}
              onMouseEnter={() => setHoveredSquare(index)}
              onMouseLeave={() => setHoveredSquare(null)}
            />
          );
        })}
      </svg>
    </div>
  );
}

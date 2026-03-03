"use client";

import React, { useEffect, useState, useRef } from "react";

const Background3D = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const rafRef = useRef<number>();

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Cancel previous animation frame
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }

      // Schedule update for next animation frame
      rafRef.current = requestAnimationFrame(() => {
        const x = e.clientX - window.innerWidth / 2;
        const y = e.clientY - window.innerHeight / 2;
        setMousePosition({ x, y });
      });
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, []);

  return (
    <>
      <div className="canvas-container" />
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 gradient-grid" />
        <div
          className="spotlight"
          style={{
            transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
          }}
        />
      </div>
    </>
  );
};

export default Background3D;

import { useEffect, useRef, useState } from "react";

const MouseCursor = () => {
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const cursorRef = useRef<HTMLDivElement>(null);
  const trailRef = useRef<HTMLDivElement>(null);

  // Smooth trailing animation
  useEffect(() => {
    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let trailX = mouseX;
    let trailY = mouseY;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const animate = () => {
      // Lerp for smooth trailing
      trailX += (mouseX - trailX) * 0.18;
      trailY += (mouseY - trailY) * 0.18;

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${mouseX - 12}px, ${mouseY - 12}px, 0) scale(${isClicking ? 0.7 : isHovering ? 1.3 : 1})`;
        cursorRef.current.style.opacity = isHovering ? "0.85" : "1";
      }
      if (trailRef.current) {
        trailRef.current.style.transform = `translate3d(${trailX - 24}px, ${trailY - 24}px, 0) scale(${isClicking ? 0.9 : 1})`;
        trailRef.current.style.opacity = isHovering ? "0.5" : "0.3";
      }
      requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    animate();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [isHovering, isClicking]);

  // Hover/click detection for interactive elements
  useEffect(() => {
    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);

    const interactive = document.querySelectorAll(
      "button, a, input, textarea, select, [role='button']"
    );
    interactive.forEach((el) => {
      el.addEventListener("mouseenter", handleMouseEnter);
      el.addEventListener("mouseleave", handleMouseLeave);
    });

    return () => {
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      interactive.forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter);
        el.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999]">
      {/* Trailing glow */}
      <div
        ref={trailRef}
        className="fixed w-12 h-12 rounded-full bg-blue-400 blur-2xl opacity-30 transition-all duration-300"
        style={{ pointerEvents: "none" }}
      />
      {/* Main cursor */}
      <div
        ref={cursorRef}
        className="fixed w-6 h-6 rounded-full border-2 border-blue-400 bg-white/80 shadow-lg transition-all duration-200"
        style={{
          boxShadow:
            "0 0 0 4px rgba(59,130,246,0.15), 0 0 16px 2px rgba(59,130,246,0.25)",
          pointerEvents: "none",
        }}
      />
    </div>
  );
};

export default MouseCursor;
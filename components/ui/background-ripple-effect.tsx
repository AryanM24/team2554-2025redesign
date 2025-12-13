"use client";
import React, { useMemo, useRef, useState, useEffect } from "react";
import { cn } from "@/lib/utils";

export const BackgroundRippleEffect = ({
  rows = 8,
  cols = 27,
  cellSize = 56,
}: {
  rows?: number;
  cols?: number;
  cellSize?: number;
}) => {
  const [clickedCell, setClickedCell] = useState<{
    row: number;
    col: number;
  } | null>(null);
  const [rippleKey, setRippleKey] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [scale, setScale] = useState(1);
  const ref = useRef<any>(null);

  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      if (mobile) {
        // Calculate scale to fit viewport width
        const viewportWidth = window.innerWidth;
        const gridWidth = cols * cellSize;
        const scaleValue = (viewportWidth * 1.1) / gridWidth; // 1.1 to ensure coverage
        setScale(Math.max(0.3, Math.min(1, scaleValue))); // Clamp between 0.3 and 1
      } else {
        setScale(1);
      }
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, [cols, cellSize]);

  return (
    <div
      ref={ref}
      className={cn(
        "absolute inset-0 h-full w-full",
        "[--cell-border-color:#161616]",
      )}
    >
      <div className="relative h-full w-full flex items-center justify-center overflow-hidden">
        <div className="pointer-events-none absolute inset-0 z-[2] h-full w-full overflow-hidden" />
        <DivGrid
          key={`base-${rippleKey}`}
          className="mask-radial-from-20% mask-radial-at-top opacity-600"
          rows={rows}
          cols={cols}
          cellSize={cellSize}
          borderColor="var(--cell-border-color)"
          clickedCell={clickedCell}
          onCellClick={(row, col) => {
            setClickedCell({ row, col });
            setRippleKey((k) => k + 1);
          }}
          interactive
        />
        {/* Vignette effect - right, left, and bottom - scaled proportionally on mobile */}
        <div 
          className="pointer-events-none absolute inset-0 z-[4]"
          style={{
            transform: isMobile ? `scale(${scale})` : 'none',
            transformOrigin: 'center',
          }}
        >
          <div className="absolute top-0 bottom-0 left-0 w-[32rem] bg-gradient-to-r from-[#040404] via-[#040404] via-[#040404]/95 via-[#040404]/70 to-transparent" />
          <div className="absolute top-0 bottom-0 right-0 w-[32rem] bg-gradient-to-l from-[#040404] via-[#040404] via-[#040404]/95 via-[#040404]/70 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 h-96 bg-gradient-to-t from-[#040404] via-[#040404] via-[#040404]/95 via-[#040404]/70 to-transparent" />
        </div>
      </div>
    </div>
  );
};

type DivGridProps = {
  className?: string;
  rows: number;
  cols: number;
  cellSize: number; // in pixels
  borderColor: string;
  clickedCell: { row: number; col: number } | null;
  onCellClick?: (row: number, col: number) => void;
  interactive?: boolean;
};

type CellStyle = React.CSSProperties & {
  ["--delay"]?: string;
  ["--duration"]?: string;
};

const DivGrid = ({
  className,
  rows = 7,
  cols = 30,
  cellSize = 56,
  borderColor = "#161616",
  clickedCell = null,
  onCellClick = () => {},
  interactive = true,
}: DivGridProps) => {
  const [isMobile, setIsMobile] = useState(false);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      if (mobile) {
        // Calculate scale to fit viewport width
        const viewportWidth = window.innerWidth;
        const gridWidth = cols * cellSize;
        const scaleValue = (viewportWidth * 1.1) / gridWidth; // 1.1 to ensure coverage
        setScale(Math.max(0.3, Math.min(1, scaleValue))); // Clamp between 0.3 and 1
      } else {
        setScale(1);
      }
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, [cols, cellSize]);

  const cells = useMemo(
    () => Array.from({ length: rows * cols }, (_, idx) => idx),
    [rows, cols],
  );

  // Circle size should be a little less than the cell size (about 80% to leave room around it)
  const circleSize = cellSize * 0.8;

  const gridStyle: React.CSSProperties = {
    display: "grid",
    gridTemplateColumns: `repeat(${cols}, ${cellSize}px)`,
    gridTemplateRows: `repeat(${rows}, ${cellSize}px)`,
    width: cols * cellSize,
    height: rows * cellSize,
    marginInline: "auto",
    transform: isMobile ? `scale(${scale})` : 'none',
    transformOrigin: 'center',
  };

  return (
    <div className={cn("relative z-[3]", className)} style={gridStyle}>
      {cells.map((idx) => {
        const rowIdx = Math.floor(idx / cols);
        const colIdx = idx % cols;
        const distance = clickedCell
          ? Math.hypot(clickedCell.row - rowIdx, clickedCell.col - colIdx)
          : 0;
        const delay = clickedCell ? Math.max(0, distance * 55) : 0; // ms
        const duration = 200 + distance * 80; // ms

        const style: CellStyle = clickedCell
          ? {
              "--delay": `${delay}ms`,
              "--duration": `${duration}ms`,
            }
          : {};

        return (
          <div
            key={idx}
            className={cn(
              "cell relative border-[0.5px] transition-all duration-150 will-change-transform group",
              "flex items-center justify-center",
              "bg-[#080808] md:hover:bg-[#181818]",
              "border-[#161616] md:hover:border-[#424242]",
              clickedCell && "md:animate-cell-ripple [animation-fill-mode:none]",
              !interactive ? "pointer-events-none" : "pointer-events-none md:pointer-events-auto",
            )}
            style={style}
            onClick={
              interactive ? () => onCellClick?.(rowIdx, colIdx) : undefined
            }
          >
            <div
              className="circle rounded-full transition-colors duration-150 bg-[#070707] md:group-hover:bg-[#151515]"
              style={{
                width: `${circleSize}px`,
                height: `${circleSize}px`,
              }}
            />
          </div>
        );
      })}
    </div>
  );
};

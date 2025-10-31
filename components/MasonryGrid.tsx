'use client'

import React, { useEffect, useRef, useState } from 'react'

const MasonryGrid = ({ children }: { children: React.ReactNode }) => {
  const gridRef = useRef<HTMLDivElement>(null)
  const [columns, setColumns] = useState(3)

  useEffect(() => {
    const updateColumns = () => {
      if (!gridRef.current) return
      const width = window.innerWidth
      if (width < 640) setColumns(1)
      else if (width < 1024) setColumns(2)
      else setColumns(3)
    }

    updateColumns()
    window.addEventListener('resize', updateColumns)
    return () => window.removeEventListener('resize', updateColumns)
  }, [])

  const columnWrapper = Array.from({ length: columns }, (_, index) => (
    <div key={index} className="flex flex-col gap-4">
      {React.Children.toArray(children)
        .filter((_, i) => i % columns === index)
        .map((child) => child)}
    </div>
  ))

  return (
    <div
      ref={gridRef}
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
    >
      {columnWrapper}
    </div>
  )
}

export default MasonryGrid


'use client'

import React, { useState } from 'react'
import { ChevronDown } from 'lucide-react'

interface AccordionItem {
  title: string
  content?: string
}

interface GettingThereAccordionProps {
  items: AccordionItem[]
  textColor?: string
  borderColor?: string
}

export function GettingThereAccordion({
  items,
  textColor = '#1a1a1a',
  borderColor = 'rgba(0,0,0,0.15)',
}: GettingThereAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="w-full">
      {items.map((item, index) => (
        <div
          key={index}
          className="border-b"
          style={{ borderColor }}
        >
          <button
            onClick={() => toggle(index)}
            className="w-full flex items-center justify-between py-4 px-1 text-left transition-colors hover:opacity-70"
            style={{ color: textColor }}
            aria-expanded={openIndex === index}
          >
            <span className="text-sm tracking-wide">{item.title}</span>
            <ChevronDown
              size={18}
              className={`transition-transform duration-300 flex-shrink-0 ml-4 ${
                openIndex === index ? 'rotate-180' : ''
              }`}
            />
          </button>
          <div
            className={`overflow-hidden transition-all duration-300 ${
              openIndex === index ? 'max-h-96 pb-4' : 'max-h-0'
            }`}
          >
            {item.content && (
              <p
                className="text-sm leading-relaxed px-1 whitespace-pre-line"
                style={{ color: textColor, opacity: 0.75 }}
              >
                {item.content}
              </p>
            )}
          </div>
        </div>
      ))}
    </div>
  )
}

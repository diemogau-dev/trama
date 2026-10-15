"use client";

import { useState } from "react";
import { FAQS } from "@/lib/content";

export default function Faq() {
  const [open, setOpen] = useState(0);
  return (
    <div className="flex flex-col border-b-[1.5px] border-carbon">
      {FAQS.map(([q, a], i) => {
        const isOpen = open === i;
        return (
          <div key={q} className="border-t-[1.5px] border-carbon">
            <button
              type="button"
              onClick={() => setOpen(isOpen ? -1 : i)}
              aria-expanded={isOpen}
              className="flex w-full cursor-pointer items-center justify-between gap-5 border-none bg-transparent py-6 text-left text-[clamp(18px,1.5vw,22px)] leading-[1.3] font-medium hover:text-terracota"
            >
              <span>{q}</span>
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border-[1.5px] border-current text-[20px] font-normal">
                {isOpen ? "−" : "+"}
              </span>
            </button>
            {isOpen && <p className="copy pr-14 pb-[26px] leading-[1.55]">{a}</p>}
          </div>
        );
      })}
    </div>
  );
}

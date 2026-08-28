"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SITE } from "@/lib/constants";

export function Loader() {
  const [visible, setVisible] = useState(true);
  const [phase, setPhase] = useState<"charge" | "glow" | "exit">("charge");

  useEffect(() => {
    const seen =
      typeof window !== "undefined" &&
      sessionStorage.getItem("ae-loader") === "1";

    if (seen) {
      setVisible(false);
      return;
    }

    const t1 = setTimeout(() => setPhase("glow"), 1100);
    const t2 = setTimeout(() => setPhase("exit"), 1800);
    const t3 = setTimeout(() => {
      setVisible(false);
      sessionStorage.setItem("ae-loader", "1");
    }, 2300);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-background"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          aria-hidden={!visible}
          role="status"
          aria-label="Yükleniyor"
        >
          <div className="relative flex flex-col items-center gap-8">
            <motion.div
              animate={{
                filter:
                  phase === "glow" || phase === "exit"
                    ? "drop-shadow(0 0 24px rgba(227,28,35,0.75))"
                    : "drop-shadow(0 0 0 transparent)",
              }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center gap-3"
            >
              {}
              <img
                src="/logo.png"
                alt=""
                width={88}
                height={88}
                className="h-[88px] w-[88px] rounded-full bg-black object-cover ring-1 ring-white/15"
              />
              <p className="font-heading text-xl tracking-tight text-foreground">
                {SITE.name.split(" ")[0]}{" "}
                <span className="text-primary">{SITE.name.split(" ")[1]}</span>
              </p>
            </motion.div>

            <svg
              width="220"
              height="4"
              viewBox="0 0 220 4"
              className="overflow-visible"
              aria-hidden
            >
              <line
                x1="0"
                y1="2"
                x2="220"
                y2="2"
                stroke="rgba(255,255,255,0.1)"
                strokeWidth="2"
              />
              <motion.line
                x1="0"
                y1="2"
                x2="220"
                y2="2"
                stroke="#D90429"
                strokeWidth="2"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: phase === "charge" ? 0.7 : 1 }}
                transition={{ duration: 1.1, ease: "easeInOut" }}
                style={{
                  filter: "drop-shadow(0 0 6px rgba(217,4,41,0.8))",
                }}
              />
            </svg>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

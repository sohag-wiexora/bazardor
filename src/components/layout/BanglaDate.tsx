"use client";

import { useEffect, useState } from "react";

export default function BanglaDate() {
  // First render-e empty rakhlam, karon server/prerender-e
  // current date calculate korte chai na.
  const [today, setToday] = useState("");

  useEffect(() => {
    // Browser-e component render howar por current date calculate korchi.
    // Ekhane new Date() thakay Next.js prerender-er somoy eta execute korbe na.
    const timer = setTimeout(() => {
      const currentDate = new Intl.DateTimeFormat("bn-BD", {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
      }).format(new Date());

      setToday(currentDate);
    }, 0);

    // Component unmount hole pending timer-ta clean kore dicchi.
    return () => clearTimeout(timer);
  }, []);

  // Date calculate howar age small placeholder space rakhlam,
  // jate navbar-er layout suddenly jump na kore.
  return (
    <p className="mt-1 min-h-4 text-xs text-[#6b6b6b]">
      {today}
    </p>
  );
}
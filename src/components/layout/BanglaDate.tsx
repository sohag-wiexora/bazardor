"use client";

import { useEffect, useState } from "react";

export default function BanglaDate() {

  const [today, setToday] = useState("");

  useEffect(() => {

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


  return (
    <p className="mt-1 min-h-4 text-xs text-[#6b6b6b]">
      {today}
    </p>
  );
}
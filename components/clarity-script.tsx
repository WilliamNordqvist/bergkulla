"use client";

import { useEffect } from "react";
import { clarity } from "react-microsoft-clarity";

export const ClarityScript = () => {
  useEffect(() => {
    if (process.env.NEXT_PUBLIC_CLARITY_ID) {
      clarity.init(process.env.NEXT_PUBLIC_CLARITY_ID);
    }
  }, []);

  return null;
};

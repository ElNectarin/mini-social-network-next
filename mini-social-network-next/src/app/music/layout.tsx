"use client";

import React, { useEffect } from "react";
import { Howl, Howler } from "howler";

export default function musicLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <div>{children}</div>;
}

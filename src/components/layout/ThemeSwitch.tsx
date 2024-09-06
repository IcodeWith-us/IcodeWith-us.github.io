"use client";
import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";
import Moon from "../icons/Moon";

type Props = {};

const ThemeSwitch = (props: Props) => {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();
  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) {
    return null;
  }
  if (resolvedTheme === "dark") {
    return <Moon onClick={() => setTheme("light")} />;
  }
  if(resolvedTheme === "light") {
    return <Moon onClick={() => setTheme("dark")} />;
  }
};

export default ThemeSwitch;

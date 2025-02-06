"use client"
import dynamic from "next/dynamic";

const DayNightToggle = dynamic(() => import("@/components/ui/theme-toggle/day-night/DayNightToggle"), { ssr: false });
 export default DayNightToggle
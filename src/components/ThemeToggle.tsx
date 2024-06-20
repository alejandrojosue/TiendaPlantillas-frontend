import { useEffect, useState } from "preact/hooks";
import { IconSettings } from "./icons/Icons";

export default function ThemeToggle() {
 const [theme, setTheme] = useState('dark');

 const handleClick = () => {
  setTheme(theme === "light" ? "dark" : "light");
 };
 useEffect(() => {
  setTheme(localStorage.getItem("theme") ?? "light")
 }, [])

 useEffect(() => {
  if (theme === "dark") {
   document.querySelector('html')?.classList.add("dark");
  } else {
   document.querySelector('html')?.classList.remove("dark");
  }
  localStorage.setItem("theme", theme);
 }, [theme]);

 return (
  <div class="fixed flex items-center top-10 right-0 p-2 translate-x-[calc(100%-46px)] hover:translate-x-0 transition-all duration-200 ease-in-out bg-slate-300 rounded-s-full z-50">
   <span class="text-slate-800 dark:"><IconSettings width="30" height="30" /></span>
   <button class=" pl-2" onClick={handleClick}>{theme === "light" ? "🌙" : "🌞"}</button>
  </div>
 )

}
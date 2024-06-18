import { useEffect, useState } from "preact/hooks";

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

 return (<><button class=" p-4 bg-slate-800 z-50" onClick={handleClick}>{theme === "light" ? "🌙" : "🌞"}</button></>)

}
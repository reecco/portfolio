import { Contact } from "../@types";
import en from "./language/en";
import ptBr from "./language/ptBr";

export { en, ptBr };

export function setLanguage(lang: string): void {
  if (lang != "pt-BR") {
    document.documentElement.lang = "en";
    localStorage.setItem("lang", "en");
    return;
  }

  document.documentElement.lang = "pt-BR";
}

export function setTheme(theme: string): void {
  if (theme === "light") {
    localStorage.setItem("theme", theme);
    document.documentElement.classList.remove("dark");
  }

  if (theme === "dark") {
    localStorage.setItem("theme", theme);
    document.documentElement.classList.add("dark");
  }
}

export const contacts: Contact[] = [
  {
    index: 0,
    title: "GitHub",
    href: "https://github.com/reecco",
  },
  {
    index: 1,
    title: "LinkedIn",
    href: "https://www.linkedin.com/in/fred-recco-a95144259/",
  },
];

export const handleLang = (lang: string) => {
  localStorage.setItem("lang", lang);
  window.location.reload();
  return;
};
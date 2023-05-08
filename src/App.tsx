import { useEffect, useState } from "react";

import "./App.css";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import { setLanguage, setTheme } from "./utils";
import ScrollButton from "./components/ScrollButton";
import Header from "./components/Header";

function App() {
  const [lang, setLang] = useState<string>("");
  const [scrollPosition, setScrollPosition] = useState<number>(0);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    const langStorage = localStorage.getItem("lang") as string;
    const theme = localStorage.getItem("theme");
    setLanguage(!langStorage ? "en" : langStorage);
    setLang(langStorage);

    if (theme == "dark") setTheme("dark");
    else setTheme("light");

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Header>
        <Navbar lang={lang} />
      </Header>
      <About lang={lang} />
      <Contact lang={lang} />
      <Footer lang={lang} />
      {scrollPosition != 0 && <ScrollButton />}
    </>
  );
}

export default App;

// const Home = async () => {
//   return (
//     <div className="w-full h-full flex flex-col justify-center items-center">
//       Welcome to the world
//       <div className="py-10 flex flex-wrap gap-6">
//         <div className="h-[200px] w-[400px] flex justify-center items-center lg_md:hidden bg-yellow-500">
//           This is for the screen 1380px
//         </div>
//         <div className="h-[200px] w-[400px] flex justify-center items-center lg:hidden bg-red-500">
//           This is for the screen 1536px
//         </div>
//         <div className="h-[200px] w-[400px] flex justify-center items-center xl:hidden bg-blue-500">
//           This is for the screen 1600px
//         </div>
//         <div className="h-[200px] w-[400px] flex justify-center items-center 2xl:hidden bg-pink-500">
//           This is for the screen 1700px
//         </div>
//         <div className="h-[200px] w-[400px] flex justify-center items-center 3xl:hidden bg-green-500">
//           This is for the screen 1920px
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Home;

"use client";

import { useEffect, useState } from "react";

const useThemeDetector = () => {
  const getCurrentTheme = () =>
    window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [isDarkTheme, setIsDarkTheme] = useState(getCurrentTheme());

  useEffect(() => {
    const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)");

    // Using addEventListener instead of addListener
    const mqListener = (e) => {
      setIsDarkTheme(e.matches);
    };

    darkThemeMq.addEventListener("change", mqListener);

    return () => {
      darkThemeMq.removeEventListener("change", mqListener);
    };
  }, []);

  return isDarkTheme;
};

export default function Home() {
  const isDarkTheme = useThemeDetector();
  return (
    <>
      <p className="capitalize">
        {isDarkTheme
          ? "this is device dark theme"
          : "this is device light theme"}
      </p>
    </>
  );
}

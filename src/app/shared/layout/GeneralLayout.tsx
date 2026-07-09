import { useState, useEffect, useRef } from "react";
import { ScrollShadow } from "@nextui-org/react";
import { Outlet, useLocation } from "react-router-dom";
import { Toaster } from "sonner";
import { Footer, Loader, LocalesButton, Tabs } from "../components";
import Profile from "../../profile/Profile";
import { UseSongStore } from "../store";

export const GeneralLayout = () => {
  const [loading, setLoading] = useState(true);
  const { getSong } = UseSongStore();
  const location = useLocation();
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const start = el.scrollTop;
    const diff = -start;
    const duration = 400;
    const startTime = performance.now();

    const animate = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3);
      el.scrollTo({ top: start + diff * ease });
      if (progress < 1) requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }, [location.pathname]);

  useEffect(() => {
    const initialTimer = setTimeout(() => {
      setLoading(false);
      getSong();
    }, 1000);

    const intervalId = setInterval(() => {
      getSong();
    }, 60000);

    return () => {
      clearTimeout(initialTimer);
      clearInterval(intervalId);
    };
  }, [getSong]);

  return (
    <div className="relative flex justify-center items-start min-h-screen px-4">
      {loading && <Loader />}
      <div className="w-full h-screen overflow-y-auto">
        <ScrollShadow ref={scrollRef} hideScrollBar size={30} className="w-3xl h-full">
          <div
            className={`transition-opacity ${
              loading ? "opacity-0" : "opacity-100"
            } w-full max-w-3xl p-3 mx-auto`}
          >
            <div className="flex flex-col">
              <Profile />

              <div className="sticky top-0 z-50 backdrop-blur-lg bg-[#0a0a16] bg-opacity-75">
                <Tabs />
              </div>
              <div>
                <Outlet />
              </div>
            </div>

            <LocalesButton />
            <hr className="bg-primary border-0 mb-3 h-0.5" />
            <Footer />
          </div>
        </ScrollShadow>
        <Toaster />
      </div>
    </div>
  );
};

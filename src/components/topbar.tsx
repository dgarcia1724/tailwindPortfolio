import { NavMobile } from "./nav-mobile";
import { NavDesktop } from "./nav-desktop";

export const Topbar = () => {
  return (
    <div className="fixed top-0 left-0 right-0 bg-neutral-950 border-b border-neutral-700 z-[999]">
      <nav className="container flex items-center justify-between py-1 lg:py-5">
        <h1 className="text-xl font-burtons">dannyg</h1>
        <NavMobile />
        <NavDesktop />
      </nav>
    </div>
  );
};

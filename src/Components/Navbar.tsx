import { Navbar } from "flowbite-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
("use client");
const TopBar = () => {
  const location = useLocation();
  const [active, setActive] = useState(
    location?.pathname.split("/")[1] == ""
      ? "home"
      : location.pathname.split("/")[1]
  );
  const [hidden, setHidden] = useState(true);
  const handleTab = (tab: string) => {
    setActive(tab);
    setHidden(true);
  };

  return (
    <div>
      <Navbar className="fixed top-0 w-full z-10">
        <Navbar.Brand href="/">
          <img
            alt="Flowbite React Logo"
            className="mr-3 h-6 sm:h-9"
            src="/vite.svg"
          />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            Movie hub
          </span>
        </Navbar.Brand>
        <div className="flex md:order-2">
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          <Link
            to={"/"}
            onClick={() => handleTab("home")}
            className={`${
              active == "home" ? "text-black" : "text-white"
            } text-2xl uppercase`}
          >
            Home
          </Link>
          <Link
            to={"/upload"}
            onClick={() => handleTab("upload")}
            className={`${
              active == "upload" ? "text-black" : "text-white"
            } text-2xl uppercase`}
          >
            Upload
          </Link>
          <Link
            to={"/about"}
            onClick={() => handleTab("about")}
            className={`${
              active == "about" ? "text-black" : "text-white"
            } text-2xl uppercase `}
          >
            About
          </Link>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default TopBar;

import { useEffect, useState } from "react";
import Sidebar from "./components/Sidebar";
import Chat from "./components/Chat";
import Profile from "./components/Profile";
import Navigation from "./components/Navigation";

import "./App.css";

function App() {
  const [profileView, setProfileView] = useState(true);
  const [sidebarView, setSidebarView] = useState(true);

  const toggleStateChat = () => {
    setProfileView(!profileView);
  };

  const toggleStateSidebar = () => {
    setSidebarView(!sidebarView);
  };

  useEffect(() => {
    const checkScreenWidth = () => {
      if (window.innerWidth <= 1400) {
        setSidebarView(false);
        setProfileView(false);
      } else {
        setSidebarView(true);
        setProfileView(true);
      }
    };

    checkScreenWidth();

    window.addEventListener("resize", checkScreenWidth);

    return () => window.removeEventListener("resize", checkScreenWidth);
  }, []);

  return (
    <div
      className=" flex mx-auto"
      style={{
        maxWidth: "1440px",
        minWidth: "1140px",
      }}
    >
      <Navigation dataNavToParent={toggleStateSidebar} />
      {sidebarView && <Sidebar dataSidebarToParent={toggleStateSidebar} />}
      <Chat dataProfileToParent={toggleStateChat} />
      {profileView && <Profile dataProfileToParent={toggleStateChat} />}
    </div>
  );
}

export default App;

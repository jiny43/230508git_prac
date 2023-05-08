import React from "react";
import AlarmForm from "../components/AlarmForm";
import BookStagramTopLogo from "../components/BookStagramTopLogo";
import Hamburger from "../components/Hamburger";
import NavBar from "../components/NavBar";
import TopMenu from "../components/TopMenu";

const headerStyle = {
  display: "flex",
};

const mainFeed = () => {
  return (
    <div>
      <header>
        <TopMenu />
      </header>

      {/* main 컨텐츠 부분은 NavBar 컴포넌트에서 담당한다. */}

      <footer>
        <NavBar />
      </footer>
    </div>
  );
};

export default mainFeed;

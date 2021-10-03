import React from "react";
import FooterWidget from "@/components/footer/footerWidget";
import PartOne from "./components/partone";
import PartTwo from "./components/parttwo";
import PartThree from "./components/partthree";
import PartFour from "./components/partfour";
import PartSix from "./components/partsix";
import PartSeven from "./components/partseven";
import "./homeIndex.less";

function HomeIndex() {
  return (
    <div className="homeIndex">
      <PartOne />
      <PartTwo />
      <PartThree />
      <PartFour />
      <PartSix />
      <PartSeven />
      <FooterWidget />
    </div>
  );
}
export default HomeIndex;

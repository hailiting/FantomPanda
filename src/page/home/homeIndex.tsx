import React from "react";
import FooterWidget from "@/components/footer/footerWidget";
import PartOne from "./components/partone";
import PartTwo from "./components/parttwo";
import PartThree from "./components/partthree";
import PartFour from "./components/partfour";
import PartSix from "./components/partsix";
import PartSeven from "./components/partseven";
import "./homeIndex.less";
export default class HomeIndex extends React.Component {
  componentDidMount() {
    this.doScroll();
    window.addEventListener("scroll", this.doScroll);
  }
  doScroll = () => {
    const animates: NodeListOf<Element> = document.querySelectorAll(".animate");
    for (const dom of animates as any) {
      const top = dom.offsetTop;
      const scrollTop = window.scrollY;
      const innerHeight = window.innerHeight;
      if (scrollTop + innerHeight - innerHeight / 10 > top) {
        dom.className = dom.className.replace("animate", dom.dataset.animate);
        console.log(dom.className);
      }
    }
  };
  render() {
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
}

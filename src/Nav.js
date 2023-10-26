import "./styles.css";
import gsap from "gsap";
import { useEffect } from "react";

export default function Nav() {
  useEffect(() => {
    gsap.fromTo(
      ".nav > h2",
      {
        y: -71,
        stagger: 0.3,
      },
      { y: 20, stagger: 0.5, ease: "circ" },
    );
  }, []);

  return (
    <div className="nav">
      <h2>SSSSSTUDIO</h2>
      <h2>PROJECTS</h2>
      <h2>INFO</h2>
    </div>
  );
}

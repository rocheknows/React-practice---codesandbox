import "./styles.css";
import gsap from "gsap";
import { useEffect, useRef } from "react";

export default function Footer() {
  useEffect(() => {
    gsap.fromTo(
      ".footer",
      {
        y: 90,
        stagger: 1, // 0.1 seconds between when each ".box" element starts animating
      },
      { y: -20, ease: "circ", delay: 1 },
    );
  }, []);

  return (
    <div className="footer">
      <p>art is like really cool, and i like it</p>
    </div>
  );
}

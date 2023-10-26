import "./styles.css";
import gsap from "gsap";
import { useEffect } from "react";

export default function Main() {
  useEffect(() => {
    gsap.fromTo(
      ".container > h1",
      {
        opacity: 0,
        scale: 0.5,
      },
      {
        opacity: 1,
        ease: "power3",
        scale: 1,
        delay: 1,
      },
    );

    gsap.to(".container > h1", {
      skewX: -180,
      duration: 2,
      ease: "ease",
      delay: 3,
    });

    gsap.fromTo(
      ".emoji > img",
      {
        x: 1000,
        duration: 6,
        ease: "power3",
        ease: "ease",
      },
      {
        x: 0,
        delay: 4,
      },
    );
  }, []);

  return (
    <div className="main">
      <div className="container">
        <h1>Super cool things here like design and art.</h1>{" "}
        <span className="emoji">
          <img src="https://miro.medium.com/v2/resize:fit:1358/1*IRodTi2l7SHmJTgBR1yHXg.jpeg" />
        </span>
      </div>
    </div>
  );
}

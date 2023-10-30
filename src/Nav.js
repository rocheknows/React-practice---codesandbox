import "./styles.css";
import gsap from "gsap";
import { useEffect, useState } from "react";

export default function Nav() {
  useEffect(() => {
    let tl = gsap.timeline({ defaults: { duration: 0.8, ease: "circ" } });
    tl.fromTo(
      ".nav",
      {
        y: -91,
        stagger: -0.4,
      },
      { y: 0, stagger: 0.4 },
    );
    tl.fromTo(
      ".filter",
      {
        autoAlpha: 0,
        y: -90,
        stagger: 0.3,
      },
      { autoAlpha: 1, y: 0, stagger: 0.3 },
    );
  }, []);
  const [open, setOpen] = useState(false);
  const active = document.querySelector(".info-drop-down.active");

  useEffect(() => {
    gsap.to(".active", {
      opacity: 1,
      duration: 3,
      y: 100,
    });
  }, []);

  return (
    <>
      <div className="nav">
        <div className="nav-left">
          <span>TOM ROCHE</span>

          <span
            className="info-button"
            onClick={() => {
              setOpen(!open);
            }}
          >
            Info
          </span>
          <section
            className={`info-drop-down  ${open ? "active" : "inactive"}`}
          >
            <p>TOM@TOMROCHE.INFO</p>
            <p>
              MULTIDISIPLINARY DESIGNER AND IMAGE MAKER
              <br />
              <br />
              Selected Clients
              <br />
              SIZE? <br />
              MERRELL
              <br />
              COLUMBIA
              <br />
              MAMMUT
              <br />
              HOKA
            </p>
          </section>
        </div>
        <div className="nav-right">
          <img
            src="https://res.cloudinary.com/dygjhmf9x/image/upload/v1698737481/asterisk-svgrepo-com_flmmec.png"
            alt=""
            className="asterisk"
          />
        </div>
      </div>
    </>
  );
}

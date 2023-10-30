import "./styles.css";
import gsap from "gsap";
import { useEffect } from "react";

export default function Main() {
  useEffect(() => {}, []);

  return (
    <div className="main">
      <div className="container">
        <div className="filter">
          <a className="commercial">commercial</a>
          <a className="personal">Personal</a>
        </div>
      </div>
      <section className="project">
        <div className="image-container">
          <img
            src="https://res.cloudinary.com/dygjhmf9x/image/upload/v1694615771/foam001_sk6qka.jpg"
            alt=""
            width="500px"
            height="auto"
          />
        </div>
        <div className="information-container">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores,
          fugiat facilis! Fugiat earum quisquam optio vero similique, iusto
          quidem porro esse possimus, animi nostrum architecto qui soluta minima
          doloremque cum?
        </div>
      </section>
    </div>
  );
}

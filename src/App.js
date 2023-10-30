import "./styles.css";
import Nav from "./Nav.js";
import Main from "./Main.js";
import Footer from "./Footer.js";

export default function App() {
  return (
    <div>
      <div className="rel">
        <Nav id="nav" />
        <Main id="main" />
      </div>
      <Footer id="footer" />
    </div>
  );
}

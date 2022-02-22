import "./topbar.scss";
import { Person, Mail, GitHub } from "@material-ui/icons";

export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className= {"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="https://github.com/Dlelias" className="logo">
            Delmy Elias
            <GitHub className="icon"/>
          </a>
          <div className="itemContainer">
            <Person className="icon" />
            <span> 310 775 0999 </span>
          </div>
          <div className="itemContainer">
            <Mail className="icon" />
            <span> dlelias790@gmail.com </span>
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}

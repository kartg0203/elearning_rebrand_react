import NavBar from "../../components/NavBar/NavBar";
import Marquee from "../../components/Marquee/Marquee";
import "./Header.scss";
const Header = () => {
  return (
    <div className="header">
      <NavBar />
      <hr className="header-divider" />
      <div className="banner container">
        <div className="row">
          <div className="col-5">
            <div className="banner-text">
              <div className="title">Ourscool,</div>
              <div className="title">for your better future.</div>
              <div className="sub-title">學習 .成為更好的自己</div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-6 ms-auto">
          <Marquee />
        </div>
      </div>
    </div>
  );
};

export default Header;

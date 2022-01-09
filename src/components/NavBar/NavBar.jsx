import { ReactComponent as OurScool } from "../../images/OurScool.svg";
import { ReactComponent as Notification } from "../../images/Notification.svg";
import { ReactComponent as LogOut } from "../../images/LogOut.svg";
import Li from "../List/Li";

const NavBar = () => {
  const navLink = [
    { id: 1, text: '課程安排' },
    { id: 2, text: '教師簡介' },
    { id: 3, text: '學習歷程' },
    { id: 4, text: '課程討論' },
    { id: 5, text: '問答家教' },
    { id: 6, text: '加值服務' },
    { id: 7, text: '會員資料' },
  ];
  return (
    <nav className="py-4">
      <div className="container">
        <div className="row">
          <div className="col-3">
            <OurScool />
          </div>
          <div className="col-9 d-flex">
            <ul className="nav">
              {
                navLink.map((nav) => {
                  return <Li class="nav-item" key={nav.id}>
                    <a className="nav-link" href="#">
                      {nav.text}
                    </a>
                  </Li>
                })
              }
            </ul>
            <Notification className="me-2" />
            <LogOut />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;

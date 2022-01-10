import "./Footer.scss";
import Li from "../../components/List/Li";
import OurScoolIcon from "../../images/FooterOurScoolIcon.svg";
import OurScoolText from "../../images/FooterOurScoolText.svg";
import TaiCIcon from "../../images/FooterTaiCIcon.svg";
import TaiCText from "../../images/FooterTaiCText.svg";
import FaceBookIcon from "../../images/FBWhite1.svg";
import LineIcon from "../../images/lINEGray-031.svg";
const Footer = () => {
  const about = [
    { id: 1, text: 'About Us' },
    { id: 2, text: '關於我們' },
    { id: 3, text: '加入我們' },
    { id: 4, text: '隱私權政策' },
    { id: 5, text: '服務條款' },
  ];

  const help = [
    { id: 1, text: 'Help' },
    { id: 2, text: '企業學習方案' },
    { id: 3, text: '常見問題' },
  ];
  return (
    <div className="footer py-4">
      <div className="container">
        <div className="row">
          <div className="col-4">
            <div className="row">
              <div className="col-4 offset-2">
                <ul className="list-unstyled">
                  {
                    about.map(object => {
                      return <Li class="li" key={object.id}>{object.text}</Li>
                    })
                  }
                </ul>
              </div>
              <div className="col-4">
                <ul className="list-unstyled">
                  {
                    help.map(object => {
                      return <Li class="li" key={object.id}>{object.text}</Li>
                    })
                  }
                </ul>
              </div>
            </div>
          </div>
         <div className="col-5 offset-3">
            <div className="row about">
              <div className="col-4">
                <div className="d-flex">
                  <img src={OurScoolIcon} alt="" />
                  <img src={OurScoolText} className="" alt="" />
                </div>
                <div className="text ourscool">樂學舍數位教育有限公司</div>
              </div>
              <div className="col-4 offset-1">
                <div className="ourscool d-flex">
                  <img src={TaiCIcon} alt="" />
                  <img src={TaiCText} className="d-block me-auto" alt="" />
                </div>
                <div className="text taic">台中市南區忠明南路787號9樓A2</div>
              </div>
              <div className="col-3">
                <div className="ourscool d-flex justify-content-evenly">
                  <img src={FaceBookIcon} alt="" />
                  <img src={LineIcon} alt="" />
                </div>
                <div className="text sns">04 2265 7611</div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-4">
            <div className="row">
              <div className="col-10 offset-2">
                   <p className="copyright">© 2021 Ourscool All Rights Reserved</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer;

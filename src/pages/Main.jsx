import MainCss from "./Main.module.scss";
import ThemeLesson from "./ThemeLesson.jsx";
import TodayLesson from "./TodayLesson.jsx";
import Teachers from "./Teachers.jsx";
import { ReactComponent as Tiger } from "../images/Tiger.svg";
import Card from "../components/Card/Card";
import CardTitle from "../components/Card/CardText";
import CardSubTitle from "../components/Card/CardSubTitle";
import Button from "../components/Button/Button";
import Service from "./Service.jsx";
const Main = () => {

  return <div className="main py-5">
    <div className="container">
      <div className="mb-5">
        <ThemeLesson />
      </div>
      <div className="mb-5">
        <TodayLesson />
      </div>
      <div className="mb-5">
        <Teachers />
      </div>
    </div>
    <div className={MainCss.banner}>
      <div className="container">
        <div className="row">
          <div className="col-3">
            <Card cardClass="bg-transparent border-0">
              <CardTitle class={`${MainCss.card_title} text-white`} text="Ourscool News" />
              <CardSubTitle class={`${MainCss.card_sub_title} text-white`} text="熱門活動／最新消息進行中！" />
              <div className="d-grid gap-2 col-7">
                <Button class={`btn-light  ${MainCss.btn_color}`} text="See More" />
              </div>
            </Card>
            <Tiger />
          </div>
          <div className="col-9">
            <div className="row justify-content-between">
              <div className="col-3">
                <div className={`${MainCss.box}`}>
                  <img src="https://fakeimg.pl/355x357/" />
                  <p className={MainCss.text}>完整收錄500題新多益熱門必考文法題型，重點學習，提升效率！</p>
                </div>
              </div>
              <div className="col-3">
                <div className={`${MainCss.box}`}>
                  <img src="https://fakeimg.pl/355x357/" />
                  <p className={MainCss.text}>完整收錄500題新多益熱門必考文法題型，重點學習，提升效率！</p>
                </div>
              </div>
              <div className="col-3">
                <div className={`${MainCss.box}`}>
                  <img src="https://fakeimg.pl/355x357/" />
                  <p className={MainCss.text}>完整收錄500題新多益熱門必考文法題型，重點學習，提升效率！</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>

    <div className={`container ${MainCss.service}`}>
      <Service title={MainCss.title} text={MainCss.text} />
    </div>
  </div >;
}

export default Main;

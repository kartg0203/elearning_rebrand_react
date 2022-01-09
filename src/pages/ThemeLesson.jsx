import Card from "../components/Card/Card";
import CardTitle from "../components/Card/CardTitle";
import CardSubTitle from "../components/Card/CardSubTitle";
import CardText from "../components/Card/CardText";
import Button from "../components/Button/Button";
import CountryIconUSA from "../images/CountryIconUSA.svg";
import TeacherImage from "../images/Teacher1.svg";
import { ReactComponent as ScoreStar } from "../images/ScoreStar.svg";
import MainCard from "./MainCard.module.scss";
const ThemeLesson = () => {
  const lesson = [
    { id: 1, icon: CountryIconUSA, title: '新聞不無聊，用英語讀懂國內外新聞趣事！', text: 'subT1', teacher: { image: TeacherImage, name1: 'teacher1', name2: '老師1', score: 1 } },
    { id: 2, icon: CountryIconUSA, title: '新聞不無聊，用英語讀懂國內外新聞趣事！', text: 'subT2', teacher: { image: TeacherImage, name1: 'teacher2', name2: '老師2', score: 1 } },
    { id: 3, icon: CountryIconUSA, title: 't3', text: 'subT3', teacher: { image: TeacherImage, name1: 'teacher3', name2: '老師3', score: 1 } },
    { id: 4, icon: CountryIconUSA, title: 't4', text: 'subT4', teacher: { image: TeacherImage, name1: 'teache4', name2: '老師4', score: 1 } },
    { id: 5, icon: CountryIconUSA, title: 't5', text: 'subT5', teacher: { image: TeacherImage, name1: 'teacher5', name2: '老師5', score: 1 } },
    { id: 6, icon: CountryIconUSA, title: 't6', text: 'subT6', teacher: { image: TeacherImage, name1: 'teacher6', name2: '老師6', score: 1 } },
  ];
  return (
    <div className="row">
      <div className="col-3">
        <Card cardClass={MainCard.card_main}>
          <CardTitle class={MainCard.title} text="Theme Lesson" />
          <CardSubTitle class={MainCard.sub_title} text="熱門主題課程" />
          <CardText class={MainCard.text} text="有趣又實用的主題課程，享受語言帶來的樂趣，限時卡位！" />
          <Button text="See More" class="btn-warning text-white" />
        </Card>
      </div>
      <div className="col-9">
        <div className="row row-cols-4 over-flow-x flex-nowrap">
          {
            lesson.map(object => {
              return <div className="col" key={object.id}>
                <Card cardClass={`h-100 ${MainCard.card_sub}`}>
                  <div><img src={object.icon} alt="country icon" /><span className={MainCard.top_title}>主題課程</span></div>
                  <CardTitle class={MainCard.title} text={object.title} />
                  <CardText class={MainCard.text} text={object.text} />
                  <div className="d-flex">
                    <img src={object.teacher.image} alt="" />
                    <div>
                      <div className={MainCard.text}>
                        {object.teacher.name1}/{object.teacher.name2}
                      </div>
                      <ScoreStar /><span className={MainCard.score}>{object.teacher.score}星</span>
                    </div>
                  </div>
                </Card>
              </div>
            })
          }
        </div>
      </div>
    </div>
  );
}

export default ThemeLesson;

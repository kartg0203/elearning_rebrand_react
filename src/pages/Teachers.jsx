import Card from "../components/Card/Card";
import CardTitle from "../components/Card/CardTitle";
import CardSubTitle from "../components/Card/CardSubTitle";
import CardText from "../components/Card/CardText";
import Button from "../components/Button/Button";
import TeacherImage from "../images/Teacher2.svg";
import GoodIconInfo from "../images/GoodIconInfo.svg";
import MainCard from "./MainCard.module.scss";
import ScoreStarSmall from "../images/ScoreStarSmall.svg";
const Teachers = () => {
  const teachers = [
    { id: 1, goodIcon: GoodIconInfo, image: TeacherImage, name1: 'teacher1', name2: '老師1', score: 1, Visit: 235 },
    { id: 2, goodIcon: GoodIconInfo, image: TeacherImage, name1: 'teacher2', name2: '老師2', score: 2, Visit: 2353 },
    { id: 3, goodIcon: GoodIconInfo, image: TeacherImage, name1: 'teacher3', name2: '老師3', score: 3, Visit: 2353 },
    { id: 4, goodIcon: GoodIconInfo, image: TeacherImage, name1: 'teacher4', name2: '老師4', score: 4, Visit: 23 },
  ];
  return (
    <div className="row">
      <div className="col-3">
        <Card cardClass={`${MainCard.card_main}`}>
          <CardTitle class={MainCard.title} text="Teachers" />
          <CardSubTitle class={MainCard.sub_title} text="優選師資" />
          <CardText class={MainCard.text} text="有趣又實用的主題課程，享受語言帶來的樂趣，限時卡位！" />
          <Button text="See More" class="btn-info text-white" />
        </Card>
      </div>
      <div className="col-9">
        <div className="row row-cols-4 over-flow-x flex-nowrap">

        </div>
      </div>
    </div>
  );
}

export default Teachers;

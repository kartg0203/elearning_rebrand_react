import ShoppingIcon from "../images/ShoppingIcon.svg";

const Service = (props) => {
  const services = [
    {
      id: 1, icon: ShoppingIcon, title: '加值服務',
      text: `線上課程、題庫、影片等豐富資源<br />更多升級成效有一套！`
    },
    {
      id: 2, icon: ShoppingIcon, title: '許願池',
      text: `線上課程、題庫、影片等豐富資源<br />更多升級成效有一套！`
    },
    {
      id: 3, icon: ShoppingIcon, title: '聯絡客服',
      text: `週一至週五<br />9:00-18:00`
    },
  ];
  return (
    <div className="row py-5" >
      {services.map(service => {
        return <div className="col-4" key={service.id}>
          <img src={service.icon} className="d-block mx-auto" alt="serviceIcon" />
          <div className="content text-center">
            <div className={props.title}>{service.title}</div>
            <div className={props.text} dangerouslySetInnerHTML={{ __html: service.text }}></div>
          </div>
        </div>
      })}
    </div >
  );
}

export default Service;

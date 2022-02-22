import { useEffect, useState } from "react";
import PortfolioList from "../portfolioList/PortfolioList";
import "./portfolio.scss";
import{
  featuredPortfolio,
  webPortfolio,
  mobilePortfolio,
  designPortfolio,
  contentPortfolio,
  nosqlPortfolio,
  pwaPortfolio,
} from "../../data";

export default function Portfolio() {
  const [selected, setSelected] = useState("featured");
  const [data, setData] = useState([]);
  const list = [
    {
      // password gen, code quiz 
      id: "featured",
      title: "Javascript",
    },
    {
      //  day scheduler,weather dashboard
      id: "web",
      title: "APIs",
    },
    {
      // team generator
      id: "mobile",
      title: "OOP",
    },
    {
      // note taker
      id: "design",
      title: "Express js",
    },
    {
      // tech blog
      id: "content",
      title: "MVC",
    },
    {
      // workout
      id: "nosql",
      title: "No SQL",
    },
    {
      // online.offline budget
      id: "pwa",
      title: "PWA",
    },
  ];

  useEffect(() => {

    switch(selected){
      case"featured":
      setData(featuredPortfolio);
      break;
      case"web":
      setData(webPortfolio);
      break;
      case"mobile":
      setData(mobilePortfolio);
      break;
      case"design":
      setData(designPortfolio);
      break;
      case"content":
      setData(contentPortfolio);
      break;
      case"nosql":
      setData(nosqlPortfolio);
      break;
      case"pwa":
      setData(pwaPortfolio);
      break;
      default:
        setData(featuredPortfolio);
    }

  },[selected])

  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <ul>
      {list.map((item) => (
        <PortfolioList 
        title={item.title}
        active={selected === item.id}
        setSelected={setSelected}
        id={item.id}
        />
      ))}
      </ul>
     <div className="container">
       {data.map((data) => (
      
         <div className="item">
          <img src ={data.img} 
          alt="loading"/>
          <h3> {data.title} </h3>
        </div>
          ))}
     </div>
    </div>
  );
}

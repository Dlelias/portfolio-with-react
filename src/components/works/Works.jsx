import { useState } from "react";
import "./works.scss";

export default function Works() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const data = [
    {
      id: 1,
      icon: "./assets/houseicon.png",
      title: "Room Finders",
      desc: " Search website to find rooms by State, City, and Price max Parameters. The data is fetch and presented to the user based on their input",
      img: "assets/roomfinders.png",
    },

    {
      id: 2,
      icon: "./assets/houseicon.png",
      title: " Rental Finders",
      desc: "Building on the original Room Finders, Rental Finders implements user validation. The idea is to encourge the user to build on a search or post profile",
      img: "./assets/rentalfinders.png",
    },

    {
      id: 3,
      icon:"./assets/houseicon.png",
      title: " Results page",
      desc: "Both applications provide the user with a property results page providing additional photos of the property they select",
      img: "./assets/resultspage.png",
    },
  ];

  const handleClick = (way) => {
    way === "right" 
    ? setCurrentSlide(currentSlide > 0 ? currentSlide -1 : 2)
    : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
  };
  
  return (
    <div className="works" id="works">
      <div className="slider" 
      style={{ transform: `translateX(-${currentSlide * 100}vw)`}}> 
        { data.map((data) => (
          <div className="container">
          <div className="item">
            <div className="left">
              <div className="leftContainer">
                <div className="imgContainer">
                  <img src={data.icon} alt="" />
                </div>
                <h2>{data.title}</h2>
                <p>{data.desc}</p>
                <span>Projects</span>
              </div>
            </div>
            <div className="right">
              <img src={data.img} alt="" />
            </div>
          </div>
        </div>
          ))}
      </div>
      <img src="assets/rightArrow.png" className="arrow left" alt="" onClick ={() => handleClick("right")}  />
      <img src="assets/rightArrow.png" className="arrow right" alt="" onClick ={() => handleClick()} />
    </div>
  );
}

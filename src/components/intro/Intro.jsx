import "./intro.scss"
import { init } from "ityped"
import { useEffect, useRef} from "react"

export default function Intro() {

  const textRef = useRef();
  useEffect(() => {
   init(textRef.current, {
     showCursor: true,
     backDelay:1500,
     backspeed:60,
  
     strings: ["Javascript", "React","SQL ","Full Stack"]
   });
  },[])
  return (
    <div className="intro" id ="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="assets/explorer.jpg" alt="image is loading ☠ "/>
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi!🤸‍♀️ I'm </h2> 
          <h1>Delmy Elias</h1>
          <h3> <span ref={textRef}></span> Developer </h3>
        </div>
        <a href="#portfolio">
          <img src="assets/downarrow.png" alt="🔽"/>
        </a>
      </div>

    </div>
  )
}

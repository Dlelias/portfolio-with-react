import "./testimonials.scss"

export default function Testimonials() {

  const data = [
    {
      id:1,
      name: "HTML, CSS, JS",
      title: "Foundations",
      img: "./assets/foundationicon.png",
      desc: "I began with learning the foundation of the front end. HTML- the body, CSS- the style, Javascipt- the function",
      icon:"./assets/check.png",
      
    },
    {
      id:2,
      name: "Back End and Databases",
      title: "Node js, Express js,SQL, no SQL ",
      img: "./assets/nosqlicon.png",
      desc: "Later I began working with back end, using Node js and Express js. I learned about SQL and noSQL allowing me to work with storing, manipulating and retrieving data from databases (CRUD)",
      icon:"./assets/check.png",
      featured: true,
    },
    {
      id:3,
      name: "React",
      title: "Currently on React ",
      img: "./assets/reacticon.png",
      desc: "Currently working with react to create user interfaces in an efficient way. ",
      icon:"./assets/flagicon.jpeg",
    }
    
  ]
  return (
    <div className="testimonials" id="testimonials"> 
      <h1> Full Stack Journey 🚘  </h1> 
        <div className="container"> 
        {data.map(data =>(

          <div className={data.featured ? "card featured" : "card"}>
            <div className="top">
              <img src="assets/rightArrow.png" className="left" alt="blah"/>
              <img className="user"
              src= {data.img}
              alt="blach"/>
              
              <img className="right"
              src={data.icon}
              alt="blah"/>
            </div>
            <div className="center">
              {data.desc}
              </div>
            <div className="bottom">
              <h3> {data.name} </h3>
              <h4> {data.title} </h4>
            </div>
          </div>
        ))}
        </div>

    </div>
  )
}





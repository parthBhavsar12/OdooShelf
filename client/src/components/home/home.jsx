import "./home.css";
import bookimg from "./book.png"

const Home = () => {
  return (
   
     <div className="home">
      <div className="data">
        <span> The library is the people&apos;s university. </span>
        <p>Welcome to a world of knowledge at your fingertips! Our library management system empowers libraries to streamline operations, enhance accessibility, and foster a love of learning for everyone.</p>
        <button className="getStarted">Get Started<i className="zmdi zmdi-caret-right-circle"></i></button>
      </div>
      
      <div className="img"><img src={bookimg} alt="" />
      </div>
    </div>
  )
}

export default Home;

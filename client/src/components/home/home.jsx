import "./home.css";
// import homeImage from './home.jpg';

const Home = () => {
  return (
    <div className="home">
      {/* <img src={homeImage} alt="" width="100%" height="100%" /> */}
      <div className="data">
        <span> The library is the people's university. </span>
        <p>Welcome to a world of knowledge at your fingertips! Our library management system empowers libraries to streamline operations, enhance accessibility, and foster a love of learning for everyone.</p>
        <button className="getStarted">Get Started<i class="zmdi zmdi-caret-right-circle"></i></button>
      </div>
    </div>
  )
}

export default Home;

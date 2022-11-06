import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
const Home = () => {
<Helmet>
        <title>Home</title>
        <meta
          name="description"
          content="Homepage for CtrlSchool of Engineering"
        />
      </Helmet>
  return (
    <div className="home">
      <h2>Learn highly sought after tech skills without hassle.</h2>
      <p>Earn a Diploma in highly-sought after tech skills.</p>
      <Link to="/signup">
      <button className="btn">
        Sign Up
      </button>
      </Link>
    </div>
  );
};

export default Home;


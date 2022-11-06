import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
const Error404 = () => {
  <Helmet>
  <title>Error</title>
  <meta
    name="description"
    content="Error Page"
  />
</Helmet>
  return (
    <div className="error404">
      <h1>OOPS!</h1>
      <h2>404 - PAGE NOT FOUND</h2>
      <p>The page you're looking for has either been removed or doesn't exist</p>
      <div className="backtohomepage">
      <Link to="/" style={{
        color: "white",
        backgroundColor: "black"
      }}>BACK TO HOMEPAGE</Link>
      </div>
    </div>
  );
};

export default Error404;

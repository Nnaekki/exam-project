import { useHistory } from "react-router-dom";
import { useAuth } from "../Context/auth";
import { Helmet } from "react-helmet";

const Dashboard = () => {
  <Helmet>
        <title>Dashboard</title>
        <meta
          name="description"
          content="Your private profile page"
        />
      </Helmet>
  const auth = useAuth ();
  const history = useHistory();
  const handleLogout = () => {
    auth.logout ()
    history.push ("/login");

  }
    return ( 
        <div className="dashboard">
            <h2>Dashboard</h2>
            <p> Welcome {auth.user} to your dashboard</p>
      <button className="btn2" onClick={handleLogout}>
        Log Out
      </button>
        </div>
     );
}
 
export default Dashboard;
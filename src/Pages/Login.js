import { Link, useHistory } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../Context/auth";
import { Helmet } from "react-helmet";

const Login = () => {
  <Helmet>
        <title>Login</title>
        <meta
          name="description"
          content="Login to CtrlSchool of Engineering"
        />
      </Helmet>
  const [user, setUser] =useState("");
  const auth = useAuth();
  const history = useHistory();
  const handleLogin = ( ) => {
 auth.login(user)
 history.push ("/dashboard", { replace: true });

  }
    return ( 
        <div className="login">
            <h2>Log In</h2>
            <form>
        <label>Username:</label>
        <input type="text"
        onChange={e => setUser(e.target.value)} 
        required
        />
        <label>Password:</label>
        <input type="password" 
                required
        />

         <button type="submit" onClick={handleLogin}>Log In</button>
         <p>Don't have an account? <Link to ="/signup">Sign Up</Link></p>
        </form>
        </div>
     );
}
 
export default Login;
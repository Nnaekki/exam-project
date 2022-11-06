import {Link} from "react-router-dom";
import { Helmet } from "react-helmet";

const Signup = () => {
    <Helmet>
        <title>Signup</title>
        <meta
          name="description"
          content="Signup for CtrlSchool of Engineering"
        />
      </Helmet>
        return ( 
        <div className="signup">
            <h2>Sign Up</h2>
            <form>
        <label>Email:</label>
        <input type="text" 
        placeholder="Email"
        required
        />
        <label>Password:</label>
        <input type="password" 
        placeholder="Password"
        required
        />
         <button type="submit">Sign Up</button>
        </form>
        <p>Already have a page? <Link to ="/login">Log In</Link></p>
        </div>
     );
}
 
export default Signup;
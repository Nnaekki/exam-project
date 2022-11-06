import { useAuth } from "../Context/auth";
import { Redirect } from "react-router-dom";
const RequireAuth = ({children}) => {
    const auth = useAuth()
    if(!auth.user){
return < Redirect to ="/login" />
    }
    return children
}
 
export default RequireAuth;
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import {useLocation} from "react-router";
export default function AccountNavigation() {
    const { currentUser } = useSelector((state: any) => state.accountReducer);
    const links = currentUser ? ["Profile"] : ["Signin", "Signup"];
    const { pathname } = useLocation();

    return (
        <div id="wd-account-navigation">
            <Link id="wd-signin-navigation" to={`/Kanbas/Account/Signin`} className="list-group-item " > Signin  </Link>
            <Link id="wd-signup-navigation" to={`/Kanbas/Account/Signup`} className="list-group-item "  > Signup  </Link>
            <Link id="wd-profile-navigation" to={`/Kanbas/Account/Profile`} className="list-group-item "  > Profile </Link>
        </div>
    );}

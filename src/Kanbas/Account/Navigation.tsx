import { Link } from "react-router-dom";
export default function AccountNavigation() {
    return (
        <div id="wd-account-navigation">
            <Link id="wd-signin-navigation" to={`/Kanbas/Account/Signin`} className="list-group-item " > Signin  </Link>
            <Link id="wd-signup-navigation" to={`/Kanbas/Account/Signup`} className="list-group-item "  > Signup  </Link>
            <Link id="wd-profile-navigation" to={`/Kanbas/Account/Profile`} className="list-group-item "  > Profile </Link>
        </div>
    );}

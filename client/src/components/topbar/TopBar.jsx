import { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import "./topbar.css";
import avatar from "../../assets/avatar.jpg"
import logo from "../../assets/logo.png"

export default function TopBar() {
  const { user, dispatch } = useContext(Context);
  const PF = "http://localhost:8001/images/"

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };
  return (
    <div className="top">
      <div className="topLeft">
      <Link to = "/">
        <img src = {logo} style = {{width : "200px", margin : "10px 0px"}}/>
      </Link>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link className="link" to="/">
              🏠HOME
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/write">
              WRITE-BLOG
            </Link>
          </li>
          <li className="topListItem" onClick={handleLogout}>
            {user && "LOGOUT"}
          </li>
        </ul>
      </div>
      <div className="topRight">
        {user ? (
          <Link to="/settings">
            <img className="topImg" src={avatar} alt="" />
          </Link>
        ) : (
          <ul className="topList">
            <li className="topListItem">
              <Link className="link" to="/login">
                LOGIN 👩🏻‍💻
              </Link>
            </li>
            <li className="topListItem">
              <Link className="link" to="/register">
                REGISTER 🖊
              </Link>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
}

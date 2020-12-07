import React from "react";
import {Link, useHistory} from "react-router-dom";

export default function Menu() {

  const history = useHistory();
  console.log(history);

  // const [key, setKey] = React.useState(null);
  // function handleClick(e) {
  //   console.log(e.target)
  //   const { value } = e.target;
  //   setKey(value);
  // }

  // function onSubmit(e) {
  //   // e.preventDefault();
  //   history.push(`/category?key=${key}`);
  // }

  return (
    <div className="row">
      <div className="col-lg-12 col-md-12 col-sm-12">
        <nav>
          <div id="menu" className="collapse navbar-collapse">
            <ul>
              <li className="menu-item">
                <Link to="/category?key=Iphone">iPhone</Link>
              </li>
              <li className="menu-item">
                <Link to="/category?key=Samsung">Samsung</Link>
              </li>
              <li className="menu-item">
                <Link to="/category?key=Htc">HTC</Link>
              </li>
              <li className="menu-item">
                <Link to="/category?key=Nokia">Nokia</Link>
              </li>
              <li className="menu-item">
                <Link to="/category?key=Sony">Sony</Link>
              </li>
              <li className="menu-item">
                <Link to="/category?key=Blackberry">Blackberry</Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
}

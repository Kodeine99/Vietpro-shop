import React from "react";
import { Link } from "react-router-dom";
import  slug  from "slug";

export default function Menu({ data } = []) {
  
  return (
    <div className="row">
      <div className="col-lg-12 col-md-12 col-sm-12">
        <nav>
          <div id="menu" className="collapse navbar-collapse">
            <ul>
              {
                data.map((item, index) => (
                  <li key={index} className="menu-item">
                    <Link to={`/cat-${slug(item.name)}.${item._id}`}> {item.name}
                    </Link>
                  </li>
                ))
              }
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
}

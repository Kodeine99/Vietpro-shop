import React from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom"; //hook nay chi hoat dong voi nhung component nam trong BrowserRouter.


export default function Header() {

  const history = useHistory();
  // console.log(history);

  function onSubmit(e) {
    e.preventDefault();
    history.push(`/search?key=${key}`); //re-direct to "/search?..."
  };

  const [key, setKey] = React.useState(null);
  function onChangeInput(e) {
    const { value } = e.target;
    setKey(value);
  }

  return (
    <div id="header">
      <div className="container">
        <div className="row">
          <div id="logo" className="col-lg-3 col-md-3 col-sm-12">
            <h1>
              <a href="#">
                <img className="img-fluid" src="images/logo.png" />
              </a>
            </h1>
          </div>
          <div id="search" className="col-lg-6 col-md-6 col-sm-12">
            <form onSubmit={onSubmit} className="form-inline">
              <input
                onChange={onChangeInput}
                className="form-control mt-3"
                type="search"
                placeholder="Tìm kiếm"
                aria-label="Search"
                name="key"
              />
              <button className="btn btn-danger mt-3" type="submit">
                Tìm kiếm
              </button>
            </form>
          </div>
          <div id="cart" className="col-lg-3 col-md-3 col-sm-12">
            <Link to="/cart" className="mt-4 mr-2" href="#Cart">
              Giỏ hàng
            </Link>
            <span className="mt-3">8</span>
          </div>
        </div>
      </div>
      {/* Toggler/collapsibe Button */}
      <button
        className="navbar-toggler navbar-light"
        type="button"
        data-toggle="collapse"
        data-target="#menu"
      >
        <span className="navbar-toggler-icon" />
      </button>
    </div>
  );
}

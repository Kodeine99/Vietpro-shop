import React from "react";

export default function Category() {
  return (
    <>
      <>
  <div id="header">
    <div className="container">
      <div className="row">
        <div id="logo" className="col-lg-3 col-md-3 col-sm-12">
          <h1><a href="#"><img className="img-fluid" src="images/logo.png" /></a></h1>
        </div>
        <div id="search" className="col-lg-6 col-md-6 col-sm-12">
          <form className="form-inline">
            <input className="form-control mt-3" type="search" placeholder="Tìm kiếm" aria-label="Search" />
            <button className="btn btn-danger mt-3" type="submit">Tìm kiếm</button>
          </form>
        </div>
        <div id="cart" className="col-lg-3 col-md-3 col-sm-12">
          <a className="mt-4 mr-2" href="#">giỏ hàng</a><span className="mt-3">8</span>
        </div>
      </div>
    </div>
    {/* Toggler/collapsibe Button */}
    <button className="navbar-toggler navbar-light" type="button" data-toggle="collapse" data-target="#menu">
      <span className="navbar-toggler-icon" />
    </button>
  </div>
  {/*	End Header	*/}
  {/*	Body	*/}
  <div id="body">
    <div className="container">
      <div className="row">
        <div className="col-lg-12 col-md-12 col-sm-12">
          <nav>
            <div id="menu" className="collapse navbar-collapse">
              <ul>
                <li className="menu-item"><a href="#">iPhone</a></li>
                <li className="menu-item"><a href="#">Samsung</a></li>
                <li className="menu-item"><a href="#">HTC</a></li>
                <li className="menu-item"><a href="#">Nokia</a></li>
                <li className="menu-item"><a href="#">Sony</a></li>
                <li className="menu-item"><a href="#">Blackberry</a></li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
      <div className="row">
        <div id="main" className="col-lg-8 col-md-12 col-sm-12">
          {/*	Slider	*/}
          <div id="slide" className="carousel slide" data-ride="carousel">
            {/* Indicators */}
            <ul className="carousel-indicators">
              <li data-target="#slide" data-slide-to={0} className="active" />
              <li data-target="#slide" data-slide-to={1} />
              <li data-target="#slide" data-slide-to={2} />
              <li data-target="#slide" data-slide-to={3} />
              <li data-target="#slide" data-slide-to={4} />
              <li data-target="#slide" data-slide-to={5} />
            </ul>
            {/* The slideshow */}
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src="images/slide-1.png" alt="Vietpro Academy" />
              </div>
              <div className="carousel-item">
                <img src="images/slide-2.png" alt="Vietpro Academy" />
              </div>
              <div className="carousel-item">
                <img src="images/slide-3.png" alt="Vietpro Academy" />
              </div>
              <div className="carousel-item">
                <img src="images/slide-4.png" alt="Vietpro Academy" />
              </div>
              <div className="carousel-item">
                <img src="images/slide-5.png" alt="Vietpro Academy" />
              </div>
              <div className="carousel-item">
                <img src="images/slide-6.png" alt="Vietpro Academy" />
              </div>
            </div>
            {/* Left and right controls */}
            <a className="carousel-control-prev" href="#slide" data-slide="prev">
              <span className="carousel-control-prev-icon" />
            </a>
            <a className="carousel-control-next" href="#slide" data-slide="next">
              <span className="carousel-control-next-icon" />
            </a>
          </div>
          {/*	End Slider	*/}
          {/*	List Product	*/}
          <div className="products">
            <h3>iPhone (hiện có 186 sản phẩm)</h3>
            <div className="product-list card-deck">
              <div className="product-item card text-center">
                <a href="#"><img src="images/product-1.png" /></a>
                <h4><a href="#">iPhone Xs Max 2 Sim - 256GB</a></h4>
                <p>Giá Bán: <span>32.990.000đ</span></p>
              </div>
              <div className="product-item card text-center">
                <a href="#"><img src="images/product-2.png" /></a>
                <h4><a href="#">iPhone Xs Max 2 Sim - 256GB</a></h4>
                <p>Giá Bán: <span>32.990.000đ</span></p>
              </div>
              <div className="product-item card text-center">
                <a href="#"><img src="images/product-3.png" /></a>
                <h4><a href="#">iPhone Xs Max 2 Sim - 256GB</a></h4>
                <p>Giá Bán: <span>32.990.000đ</span></p>
              </div>
            </div>
            <div className="product-list card-deck">
              <div className="product-item card text-center">
                <a href="#"><img src="images/product-4.png" /></a>
                <h4><a href="#">iPhone Xs Max 2 Sim - 256GB</a></h4>
                <p>Giá Bán: <span>32.990.000đ</span></p>
              </div>
              <div className="product-item card text-center">
                <a href="#"><img src="images/product-5.png" /></a>
                <h4><a href="#">iPhone Xs Max 2 Sim - 256GB</a></h4>
                <p>Giá Bán: <span>32.990.000đ</span></p>
              </div>
              <div className="product-item card text-center">
                <a href="#"><img src="images/product-6.png" /></a>
                <h4><a href="#">iPhone Xs Max 2 Sim - 256GB</a></h4>
                <p>Giá Bán: <span>32.990.000đ</span></p>
              </div>
            </div>
            <div className="product-list card-deck">
              <div className="product-item card text-center">
                <a href="#"><img src="images/product-7.png" /></a>
                <h4><a href="#">iPhone Xs Max 2 Sim - 256GB</a></h4>
                <p>Giá Bán: <span>32.990.000đ</span></p>
              </div>
              <div className="product-item card text-center">
                <a href="#"><img src="images/product-8.png" /></a>
                <h4><a href="#">iPhone Xs Max 2 Sim - 256GB</a></h4>
                <p>Giá Bán: <span>32.990.000đ</span></p>
              </div>
              <div className="product-item card text-center">
                <a href="#"><img src="images/product-9.png" /></a>
                <h4><a href="#">iPhone Xs Max 2 Sim - 256GB</a></h4>
                <p>Giá Bán: <span>32.990.000đ</span></p>
              </div>
            </div>
          </div>
          {/*	End List Product	*/}
          <div id="pagination">
            <ul className="pagination">
              <li className="page-item"><a className="page-link" href="#">Trang trước</a></li>
              <li className="page-item active"><a className="page-link" href="#">1</a></li>
              <li className="page-item"><a className="page-link" href="#">2</a></li>
              <li className="page-item"><a className="page-link" href="#">3</a></li>
              <li className="page-item"><a className="page-link" href="#">Trang sau</a></li>
            </ul> 
          </div>
        </div>
        <div id="sidebar" className="col-lg-4 col-md-12 col-sm-12">
          <div id="banner">
            <div className="banner-item">
              <a href="#"><img className="img-fluid" src="images/banner-1.png" /></a>
            </div>
            <div className="banner-item">
              <a href="#"><img className="img-fluid" src="images/banner-2.png" /></a>
            </div>
            <div className="banner-item">
              <a href="#"><img className="img-fluid" src="images/banner-3.png" /></a>
            </div>
            <div className="banner-item">
              <a href="#"><img className="img-fluid" src="images/banner-4.png" /></a>
            </div>
            <div className="banner-item">
              <a href="#"><img className="img-fluid" src="images/banner-5.png" /></a>
            </div>
            <div className="banner-item">
              <a href="#"><img className="img-fluid" src="images/banner-6.png" /></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/*	End Body	*/}
  <div id="footer-top">
    <div className="container">
      <div className="row">
        <div id="logo-2" className="col-lg-3 col-md-6 col-sm-12">
          <h2><a href="#"><img src="images/logo-footer.png" /></a></h2>
          <p>
            Vietpro Academy thành lập năm 2009. Chúng tôi đào tạo chuyên sâu trong 2 lĩnh vực là Lập trình Website &amp; Mobile nhằm cung cấp cho thị trường CNTT Việt Nam những lập trình viên thực sự chất lượng, có khả năng làm việc độc lập, cũng như Team Work ở mọi môi trường đòi hỏi sự chuyên nghiệp cao. 
          </p>
        </div>
        <div id="address" className="col-lg-3 col-md-6 col-sm-12">
          <h3>Địa chỉ</h3>
          <p>B8A Võ Văn Dũng - Hoàng Cầu Đống Đa - Hà Nội</p>
          <p>Số 25 Ngõ 178/71 - Tây Sơn Đống Đa - Hà Nội</p>
        </div>
        <div id="service" className="col-lg-3 col-md-6 col-sm-12">
          <h3>Dịch vụ</h3>
          <p>Bảo hành rơi vỡ, ngấm nước Care Diamond</p>
          <p>Bảo hành Care X60 rơi vỡ ngấm nước vẫn Đổi mới</p>
        </div>
        <div id="hotline" className="col-lg-3 col-md-6 col-sm-12">
          <h3>Hotline</h3>
          <p>Phone Sale: (+84) 0988 550 553</p>
          <p>Email: vietpro.edu.vn@gmail.com</p>
        </div>
      </div>
    </div>
  </div>
  {/*	Footer	*/}
  <div id="footer-bottom">
    <div className="container">
      <div className="row">
        <div className="col-lg-12 col-md-12 col-sm-12">
          <p>
            2018 © Vietpro Academy. All rights reserved. Developed by Vietpro Software.
          </p>
        </div>
      </div>
    </div>
  </div>
</>

    </>
  )
}

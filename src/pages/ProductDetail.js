import React from "react";
import '../assets/css/product.css';
import { getProduct, getCommentByProductId, createCommentByProductId } from "../services/Api"; 

export default function ProductDetail(props) {
  // console.log(props);
  const [product, setProduct] = React.useState(null);
  const [comments, setComments] = React.useState([]);
  const [input, setInput] = React.useState({
    content: "",
    email: "",
    name: "",
  });

  const id = props?.match?.params?.id;
  // console.log(id);
  // console.log(product);
  // console.log(comments);
  React.useEffect(() => {
    getProduct(id).then((res) => {
      if (res.data.data) {
        setProduct(res.data.data); // set data cho product.
      }
    });

    getCommentByProductId(id, {
      params: {
        sort: "-_id",
      },
    }).then((res) => {
      if (res?.data?.data?.docs) {
        setComments(res.data.data.docs); //set lai du lieu cho comments
      }
    });
  }, [id]);
// Truyen dependency vao de khi id thay doi se render lai data.
  
  function onSubmitCreateComment(e) {
    e.preventDefault(); // Xoa bo trang thai mac dinh reload cua submit

    // gui yeu cau tao comment 
    createCommentByProductId(id, input).then((res) => {
      setInput({...input, content: ""})
      getCommentByProductId(id, {
        params: {
          sort: "-_id",
        },
      }).then((res) => {
        if (res?.data?.data?.docs) {
          setComments(res.data.data.docs);
        }
      });
    })
  }

  function onChangeInput(e) {
    const { name, value } = e.target;
    setInput({...input, [name]: value});
  } 
  
  return (
    <div id="product">
      <div id="product-head" className="row">
        <div className="col-lg-6 col-md-6 col-sm-12">
          <img className="product-img" src={`http://vietpro.online/assets/uploads/${product?.image}`} alt="" />
        </div>
        <div id="product-details" className="col-lg-6 col-md-6 col-sm-12">
          <h1>{ product?.name }</h1>
          <ul>
            <li><span>Bảo hành:</span> 12 tháng</li>
            <li><span>Đi kèm:</span> { product?.accessories }</li>
            <li><span>Tình trạng:</span>{ product?.status }</li>
            <li><span>Khuyên Mại:</span>{ product?.promotion }</li>
            <li id="price">Giá bán (Chưa bao gồm VAT)</li>
            <li id="price-number">
              {new Intl.NumberFormat('vi', { style: 'currency', currency: 'VND' }).format(product?.price)}
            </li>
            <li id="status">
              {product?.is_stock ? (
                <span className="badge badge-pill badge-success">Còn hàng</span>
              )
              : (
                  <span className="badge badge-pill badge-danger">Hết hàng</span>
              )} 
            </li>
          </ul>
          <div id="add-cart">
            <a href="#a">Mua ngay</a>
          </div>
        </div>
      </div>
      <div id="product-body" className="row">
        <div className="col-lg-12 col-md-12 col-sm-12">
          <h3>Đánh giá về iPhone X 64GB</h3>
           <div dangerouslySetInnerHTML={{ __html: product?.details}}></div>
        </div>
      </div>
      {/* Comment */}
      <div id="comment" className="row">
        <div className="col-lg-12 col-md-12 col-sm-12">
          <h3>Bình luận sản phẩm</h3>
          <form method="post" onSubmit={onSubmitCreateComment}>
            <div className="form-group">
              <label>Tên:</label>
              <input
                onChange={onChangeInput}
                value={input?.name}
                type="text"
                name="name"
                required
                className="form-control"
              >
              </input>
            </div>
            <div className="form-group">
              <label>Email:</label>
              <input
                onChange={onChangeInput}
                value = {input?.email}
                type="email"
                name="email"
                required className="form-control"
                id="pwd"
              >    
              </input>
            </div>
            <div className="form-group">
              <label>Nội dung:</label>
              <textarea
                onChange={onChangeInput}
                value={input?.content}
                name="content"
                required
                row="8"
                className="form-control"
                defaultValue={""}
              >
              </textarea>
            </div>
            <button type="submit" name="sbm" className="btn btn-primary">
              Gửi
            </button>
          </form>
        </div>
      </div>
      {/* End-Comment */}

      {/* Comments-list */}
      <div id="comments-list" className="row">
        <div className="col-lg-12 col-md-12 col-sm-12">
          {comments.map((comment, index) => (
            <div className="comment-item" key={index}>
              <ul>
                <li><b>{ comment.name }</b></li>
                <li>{ comment.createdAt }</li>
                <li><p>{comment.content}</p></li>
              </ul>
            </div>
          ))}
        </div>
      </div>
      {/* End-Comment-list */}
    </div>
  )
}

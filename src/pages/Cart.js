import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { order } from "../services/Api";

export default function Cart({history}) {
  const dispatch = useDispatch();

  const [customer, setCustomer] = React.useReducer(
    (newState, prevState) => ({
      ...prevState,
      ...newState,
    }),
    {}
  )

  const cart = useSelector((state) => state.cart.items);
  const totalPrice = cart.reduce((price, item) => price + item.qty * item.price, 0);
  
  const onChangeInput = (e, id) => {
    let value = parseInt(e.target.value);
    if (isNaN(value)) {
      value = 1;
    }

    dispatch({
      type: "UPDATE_CART_ITEM",
      payload: {
        id: id,
        qty: value,
      },
    });
  };

  const onDeleteItem = (e, id) => {
    e.preventDefault();
    //eslint-disable-next-line no-restricted-globals
    const isDeleted = confirm('Ban muon xoa san pham nay ?');
    if (isDeleted) {
      dispatch({
        type: 'DELETE_CART_ITEM',
        payload: id,
      });
    }
  }
  const onChangeInputCustomer = (e) => {
    const { value, name } = e.target;
    setCustomer({ [name]: value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    order({
      ...customer,
      items: cart.map((i) => ({ prd_id: i.id, qty: i.qty })),
    }).then((res) => {
      console.log(res);
      dispatch({
        type: 'RESET_CART',
      });
      history.push("/order-success")
    });
  };
  

  return (
    <>
      {/* Cart */}
      <div id="my-cart">
        <div className="row">
          <div className="cart-nav-item col-lg-7 col-md-7 col-sm-12">
            Thông tin sản phẩm
          </div>
          <div className="cart-nav-item col-lg-2 col-md-2 col-sm-12">
            Tùy chọn
          </div>
          <div className="cart-nav-item col-lg-3 col-md-3 col-sm-12">
            Giá
          </div>
        </div>
        <form method="post">
          {
            cart.map((item, index) => (
              <div key={index} className="cart-item row">
                <div className="cart-thumb col-lg-7 col-md-7 col-sm-12">
                  <img src={`http://vietpro.online/assets/uploads/${item?.img}`} alt="" />
                  <h4>{item.name}</h4>
                </div>
                <div className="cart-quantity col-lg-2 col-md-2 col-sm-12">
                  <input
                    type="number" id="quantity"
                    className="form-control form-blue quantity"
                    value={item.qty}
                    min={1}
                    onChange={(e) => onChangeInput(e, item.id)}
                  >
                  </input>
                </div>
                <div className="cart-price">
                  <b>
                    {new Intl.NumberFormat('vi', { style: 'currency', currency: 'VND' }).format(item?.price)}
                  </b>
                  <a
                    href="#1"
                    onClick={(e) => onDeleteItem(e, item.id)}
                  >
                    Xóa
                  </a>
                </div>
              </div>
            ))
          }
          <div className="row">
            <div className="cart-thumb col-lg-7 col-md-7 col-sm-12"></div> 
            <div className="cart-total col-lg-2 col-md-2 col-sm-12"><b>Tổng cộng:</b></div> 
            <div className="cart-price col-lg-3 col-md-3 col-sm-12">
              <b>
                {new Intl.NumberFormat('vi', { style: 'currency', currency: 'VND' }).format(totalPrice)}
              </b>
            </div>
          </div>
        </form>
      </div>
      {/* End Cart */}
      
      {/* Customer info */}
      {(cart.length && (
        <div id="customer">
        <form method="post" onSubmit={onSubmit}>
          <div className="row">
            <div id="customer-name" className="col-lg-4 col-md-4 col-sm-12">
                <input
                onChange={onChangeInputCustomer}
                placeholder="Họ và tên (bắt buộc)"
                type="text"
                name="name"
                className="form-control"
                required
              >
              </input>
            </div>
            <div id="customer-phone" className="col-lg-4 col-md-4 col-sm-12">
              <input
                onChange={onChangeInputCustomer}
                placeholder="Số điện thoại (bắt buộc)"
                type="text"
                name="phone"
                className="form-control"
                required
              >
              </input>
            </div>
            <div id="customer-mail" className="col-lg-4 col-md-4 col-sm-12">
              <input
                onChange={onChangeInputCustomer}
                placeholder="Email (bắt buộc)"
                type="email"
                name="email"
                className="form-control"
                required
              >
              </input>
            </div>
            <div id="customer-add" className="col-lg-12 col-md-12 col-sm-12">
              <input
                onChange={onChangeInputCustomer}
                placeholder="Địa chỉ nhà riêng hoặc cơ quan (bắt buộc)"
                type="text"
                name="add"
                className="form-control"
                required
              >
              </input>
            </div>
            </div>
          <div className="row">
            <div className="buy-now col-lg-6 col-md-6 col-sm-12">
              <button className="btn btn-primary">
                <b>Mua ngay</b>
                <span>Giao hàng tận nơi siêu tốc</span>
              </button>
            </div>
          </div>
        </form>
      </div>
      )) || null}
      {/* End -Customer info */}
    </>
  )
}

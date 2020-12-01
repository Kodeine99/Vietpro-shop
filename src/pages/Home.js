import React from "react";
import ProductList from "../components/ProductList";
import { getProducts } from "../services/Api";


export default function Home() {
  const [newProducts, setNewProducts] = React.useState();
  const [featureProducts, setFeatureProducts] = React.useState([]);

  React.useEffect(() => {
    getProducts({
      params: {
        limit: 6,
      }
    }).then(function (res) {
      // console.log(res.data);
      if (res.data?.data?.docs) {
        setNewProducts(res.data.data.docs);
      }
    });

    getProducts({
      params: {
        limit: 6,
        "fillter[is_feature]=true": true,
      }
    }).then(function (res) {
      // console.log(res.data);
      if (res.data?.data?.docs) {
        setFeatureProducts(res.data.data.docs);
      }
    });
  }, [])
  
  return (
    <>
      <div className="products">
        <h3>Sản phẩm nổi bật</h3>
        <div className="product-list card-deck">
          <ProductList data={newProducts} />
        </div>
      </div>

      <div className="products">
        <h3>Sản phẩm mới</h3>
        <div className="product-list card-deck">
          <ProductList data={featureProducts} />
        </div>
      </div>
    </>
  );
}

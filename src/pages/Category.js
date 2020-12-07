import React from "react";
import queryString from "query-string";


import '../assets/css/category.css';

// local 
import { getProducts } from "../services/Api";


//components
import ProductList from "../components/ProductList";
import Pagination from "../components/Pagination";

export default function Category(props) {

  const [products, setProducts] = React.useState([]);
  const [pages, setPages] = React.useState({
    limit: 12,
    totalDocuments: 0,
  })

  const category = queryString.parse(props.location.search);
  const key = category.key;
  const page = category.page;
  // console.log(category)

  React.useEffect(() => {
    getProducts({
      params: {
        name: key,
        page: page,
        limit: pages.limit,
      },
    }).then((res) => {
      // console.log(res.data.data.docs)
      // console.log(res.data.data.pages.total)
      if (res?.data?.data?.docs) {
        setProducts(res.data.data.docs);
      } if (res?.data?.data?.pages) {
        setPages({
          ...pages,
          totalDocuments: res.data.data.pages.total
        });
      }
    })
  }, [key, page]);

  
  return (
    <>
      {/*	List Product	*/}
      <div className="products">
        { key ? (
            <h3>{key} (hiện có {pages.totalDocuments} sản phẩm)</h3>
        ) : null}
        <ProductList data={products} />
      </div>
      {/*	End List Product	*/}

      {/* pagination */}
      <div id="pagination">
        <Pagination pages={pages} />
      </div>
    </>
  )
}

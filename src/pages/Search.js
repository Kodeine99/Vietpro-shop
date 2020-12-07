import React from "react";
import queryString from "query-string";

//local
import { getProducts } from "../services/Api";

//components
import ProductList from "../components/ProductList";
import Pagination from "../components/Pagination";

export default function Search(props) {

  const [products, setProducts] = React.useState([]);
  const [pages, setPages] = React.useState({
    limit: 12,
    totalDocuments: 0,
  })

  const search = queryString.parse(props.location.search);
  const key = search.key;
  const page = search.page;
  console.log(search)


  React.useEffect(() => {
    getProducts({
      params: {
        name: key,
        page: page,
        limit: pages.limit,
      },
    }).then((res) => {
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
      <div className="products">
        {key ? (
          <div id="search-result">
            Kết quả tìm kiếm với sản phẩm <span>{key}</span>
         </div>
        ) : null}
        <ProductList data={products} />
      </div>

      {/* pagination */}
      <div id="pagination">
        <Pagination pages={pages} />
      </div>
    </>
  )
}

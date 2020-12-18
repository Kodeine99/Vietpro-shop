import React from "react";
import queryString from "query-string";
import {Helmet} from "react-helmet";
import '../assets/css/category.css';

// local 
import { getProducts, getCategory } from "../services/Api";


//components
import ProductList from "../components/ProductList";
import Pagination from "../components/Pagination";

export default function Category({ match, history, location }) {
  
  const [category, setCategory] = React.useState();

  const [products, setProducts] = React.useState([]);
  const [pages, setPages] = React.useState({
    limit: 12,
    totalDocuments: 0,
  })

  const { id } = match?.params;
  const search = queryString.parse(location.search);
  const page = search.page;

  const _getProducts = () => {
    getProducts({
      params: {
        "filter[category_id]": id,
        page: page,
        limit: pages.limit,
      },
    }).then((res) => {
      if (res?.data?.data?.docs) {
        setProducts(res.data.data.docs);
      }
      if (res?.data?.data?.pages) {
        setPages({
          ...pages,
          totalDocuments: res.data.data.pages.total
        });
      }
    });
  };

  React.useEffect(() => {
    getCategory(id).then((res) => {
      if(res?.data?.data) {
        setCategory(res.data.data);
      }
    }).catch((err) => history.push("/404"));
    _getProducts();
  }, [id]);

  React.useEffect(() => {
    _getProducts();
  }, [page])
  
  return (
    <>
      <Helmet>
        <title>{category?.name }</title>
      </Helmet>
      {/*	List Product	*/}
      <div className="products">
        <h3>
          {category?.name} (hiện có {pages.totalDocuments} sản phẩm)
        </h3>
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

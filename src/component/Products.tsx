import { useEffect, useState } from "react";
import ProductsProps from "./data";
import { Product } from "./data";
import"./product.scss"



const Products: React.FC<ProductsProps> = ({ hideTitle }) => {
  const [Products, setProducts] = useState<Product[]>([]);
  useEffect(() => {
    fetch(
      "https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data.products.slice(0, 4)));
  }, []);

 

return (
  <div className="product_container">
     : (
      <>
        {!hideTitle && <h1>Products</h1>}
        <ul className="product_list">
          {Products.map((P) => (
            <li className="product" key={P.id}>
              <img src={P.images} alt={P.title} className="images"/>
              <div className="container-product">
                <p className="prod">{P.title}</p> 
                <p className="price">${P.price}</p>
                <p className="code">{P.shippingInformation}</p>


              </div>
            </li>
          ))}
        </ul>
      </>
    )
  </div>
);
};

export default Products;
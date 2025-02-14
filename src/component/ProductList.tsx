import { useEffect, useState } from "react";
import ProductsProps from "./data";
import "./productList.scss";
// import CreateModal from "./barre/create";
export type ProductList = {
  id: number;
  title: string;
  price: number;
  images: string;
  stock: number;
  discountPercentage: number;
};
const ProductList: React.FC<ProductsProps> = ({}) => {
  const [ProductList, setProducts] = useState<ProductList[]>([]);
  const [show, setShow] = useState(false);
  const Confirmproduct = () => {
    alert("Produit ajouté!");
    setShow(false);
  };
  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        return setProducts(data.products);
      });
  }, []);
  return (
    <div className="product_container">
      <>
        <div className="category">
          <div className="title">
            <h2>Products</h2>

            <button className="create" onClick={() => setShow(!show)}>
              Create
            </button>
            {show && (
        <div className="Modal">
          <div className="container-Modal">
          <p>Voulez-vous ajouter ce produit?</p>
          <div className="container-button">
          <button onClick={Confirmproduct} className="btnTrue">OUI</button>
          <button onClick={() => setShow(false)} className="btnFalse">NON</button>
        </div>
        </div>
        </div>
      )}
          </div>
          <table className="product-table">
            <thead>
              <tr>
                <th>produit</th>
                <th>name</th>
                <th>price</th>
                <th>stock</th>
              </tr>
            </thead>
            <tbody>
              {ProductList.map((ProductList) => (
                <tr key={ProductList.id}>
                  <td>
                    <img
                      src={ProductList.images[0 & 1]}
                      alt={ProductList.title}
                      className="product-img"
                    />
                  </td>
                  <td>{ProductList.title}</td>
                  <td>{ProductList.price}</td>
                  <td>
                    {ProductList.stock > 0 ? (
                      ProductList.stock
                    ) : (
                      <span className="no-stock">noStock</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </>
    </div>
  );
};

export default ProductList;

// state m booleqn m false

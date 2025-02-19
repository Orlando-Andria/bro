   import { useState } from "react";
   import "./store.scss";
import Products from "./data";

function Store() {
  // const [menuOpen, setMenuOpen] = useState(false);
 
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Classic Red Pullover Hoodie",
      price: "$1000",
      stock: 12,
      image: "/Sweat à capuche Comfort Fleece Teams - Rouge - Red _ MD.jpeg",
    },
    {
      id: 2,
      name: "Classic Grey Hooded Sweatshirt",
      price: "$700",
      stock: 0,
      image: "/Gildan Sweatshirt Hooded Heavy Blend Cotton for Men and for Women Classic Fit, Men's, Size_2XL, Green.jpeg",
    },
    {
      id: 3,
      name: "Classic Navy Blue Baseball Cap",
      price: "$50",
      stock: 10,
      image: "/New Era New York Yankees Home Replica Core Classic 2_0 9TWENTY Adjustable Hat - Navy Blue.jpeg",
    },
    {
      id: 4,
      name: "Classic Black Hooded Sweatshirt",
      price: "$50",
      stock: 20,
      image: "/Buckle Up Butter Cup Zip-Up Hoodie - Medium _ Multi.jpeg",
    },
    
  ]);

  const [confirmationVisible, setConfirmationVisible] = useState(false);
  const [currentProduct, setCurrentProduct] = useState<Products | null>(null);
  const [createMode, setCreateMode] = useState(false);
  const [newProduct, setNewProduct] = useState({
    id: 0,
    name: "",
    price: "",
    stock: 0,
    image: "",
  });

  const handleDeleteProduct = (id:any) => {
    const updatedProducts = products.filter((product) => product.id !== id);
    setProducts(updatedProducts);
  };

  const handleBuyProduct = (product:any) => {
    setCurrentProduct(product);
    setConfirmationVisible(true);
  };

  const confirmPurchase = () => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === currentProduct!.id
          ? { ...product, stock: product.stock - 1 }
          : product
      )
    );
    setConfirmationVisible(false);
    alert("Achat confirmé !");
  };

  const cancelPurchase = () => {
    setConfirmationVisible(false);
  };

  const handleCreateProduct = () => {
    const newId = products.length ? products[products.length - 1].id + 1 : 1;
    const productToAdd = { ...newProduct, id: newId };
    setProducts([...products, productToAdd]);
    setCreateMode(false);
    setNewProduct({ id:0, name: "", price: "", stock: 0, image: "" });
  };

  
  return (
    <div className="dashboard">
      <main className="main-content">
        <header className="header">
          <div className="search">
            <input type="text" placeholder="Rechercher" className="search-bar" />
            <button className="place-icon">
              <img src="./src/image/search.svg" alt="Rechercher" className="icon-search" />
            </button>
          </div>
    
          
        </header>

        <section>
          <h4>Store</h4>
          <div className="store-products">
            {products.map((product) => (
              <div className="product" key={product.id}>
                <img src={product.image} alt={product.name} className="product-image" />
                <h5>{product.name}</h5>
                <p className="price">{product.price}</p>
                <p className="stock">In stock: {product.stock}</p>
                <button
                  className={`buy-button ${product.stock === 0 ? "out-of-stock" : ""}`}
                  disabled={product.stock === 0}
                  onClick={() => handleBuyProduct(product)}
                >
                  {product.stock === 0 ? "Out of Stock" : "Buy Now"}
                </button>
                <button className="manage-content-button" onClick={() => handleDeleteProduct(product.id)}>
                  Manage Content
                </button>
              </div>
            ))}
          </div>

          <div className="create-product-section">
            {createMode ? (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleCreateProduct();
                }}
                className="create-product-form"
              >
                <input
                  type="text"
                  placeholder="Nom du produit"
                  value={newProduct.name}
                  onChange={(e) =>
                    setNewProduct({ ...newProduct, name: e.target.value })
                  }
                />
                <input
                  type="text"
                  placeholder="Prix"
                  value={newProduct.price}
                  onChange={(e) =>
                    setNewProduct({ ...newProduct, price: e.target.value })
                  }
                />
               
                <input
                  type="text"
                  placeholder="URL de l'image"
                  value={newProduct.image}
                  onChange={(e) =>
                    setNewProduct({ ...newProduct, image: e.target.value })
                  }
                />
                <button type="submit">Créer</button>
                <button type="button" onClick={() => setCreateMode(false)}>
                  Annuler
                </button>
              </form>
            ) : (
              <button onClick={() => setCreateMode(true)} className="create-button">
                Créer un produit
              </button>
            )}
          </div>

          {confirmationVisible && currentProduct && (
            <div className="container-Alert">
              <div className="confirmation">
                <p>Êtes-vous sûr de vouloir acheter ?</p>
                <div className="Wrap-btn">
                  <button onClick={confirmPurchase} className="oui-btn">
                    Oui
                  </button>
                  <button onClick={cancelPurchase} className="non-btn">
                    Non
                  </button>
                </div>
              </div>
            </div>
          )}
        </section>
      </main>
    </div>
  );
}

export default Store;
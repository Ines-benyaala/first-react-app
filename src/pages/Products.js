import Product from "../components/Product";
import products from "../data";
import './products.css';

function Products() {
  return (
    <div className="Products">
    {products.map(product => (
        <Product
          key={product.id}
          imageUrl={product.productUrl}
          productName={product.name}
          productPrice={product.price.amount}
          productCurrency={product.price.currency}
        />
      ))}    
    </div>
  );
}

export default Products;

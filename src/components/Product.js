import './product.css';

function Product(props) {
  return (
    <div className="Product">
      <img src={props.imageUrl} alt={props.productName} />
      <div>
        <h2>{props.productName}</h2>
        <div>
        <p>Price: {props.productPrice}</p>
        <p>{props.productCurrency}</p>

        </div>
      </div>
    </div>
  );
}  
  export default Product;
  
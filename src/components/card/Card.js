// Card.js
import './Card.css';
import { useSelector, useDispatch } from 'react-redux';

const Card = () => {
    const { itemCount, product } = useSelector((state) => state);
    const dispatch = useDispatch();

    const handleAddProduct = () => {
        dispatch({ type: "ADD_PRODUCT" });
    };

    const handleRemoveProduct = () => {
        dispatch({ type: "REMOVE_PRODUCT" });
    };

    const handleSetProduct = () => {
        dispatch({ type: "SET_PRODUCT", payload: { name: "Gadget", price: 99.99 } });
    };

    return (
        <div className="card">
            <h2>Shopping Cart</h2>
            <p>Items in Cart: {itemCount}</p>
            <p>Product Name: {product.name}</p>
            <p>Product Price: ${product.price}</p>
            <button onClick={handleAddProduct}>Add Product</button>
            <button onClick={handleRemoveProduct}>Remove Product</button>
            <button onClick={handleSetProduct}>Set Product</button>
        </div>
    );
    
};

export default Card;

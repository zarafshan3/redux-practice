import './Nav.css';
import { useSelector } from 'react-redux';

const Nav = () => {
    const { itemCount } = useSelector((state) => state);

    return (
        <div className="nav">
            <h1>Store</h1>
            <p>Total Items: {itemCount}</p>
        </div>
    );
};

export default Nav;

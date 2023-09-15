import PropTypes from 'prop-types';

const Cart = ({cart, index}) => {
    const {title} = cart;
    return (
        <>
            <ul className="text-gray-500 ">
                <li className="mb-2">{index} {title}</li>
            </ul>
        </>
    );
};

Cart.propTypes = {
    cart: PropTypes.object,
    index: PropTypes.number
}

export default Cart;
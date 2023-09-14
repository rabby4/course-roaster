import PropTypes from 'prop-types';

const Cart = ({cart}) => {
    const {title} = cart;
    return (
        <div>
            <ol className="text-gray-500">
                <li className="mb-2">{title}</li>
            </ol>
        </div>
    );
};

Cart.propTypes = {
    cart: PropTypes.object
}

export default Cart;
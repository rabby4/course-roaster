

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

export default Cart;
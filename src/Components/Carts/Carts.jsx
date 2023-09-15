import PropTypes from 'prop-types';
import Cart from "../Cart/Cart";

const Carts = ({carts, creditHr, remainingCredit, prices}) => {
    return (
        <div className="lg:w-1/4 md:w-full w-full">
            <div className="bg-white p-7 rounded-xl">
                <h2 className="text-lg font-semibold text-blue-500 border-b-2 pb-5">Credit Hour Remaining {remainingCredit} hr</h2>
                <h2 className="text-xl font-bold py-5">Course Name:</h2>
                <div className="pb-5">
                    {
                        carts.map((cart, index) => <Cart key={index} index={index+1} cart={cart}></Cart>)
                    }
                </div>
                <h3 className="border-y-2 py-5">Total Credit Hour : {creditHr}</h3>
                <h2 className="font-semibold pt-5">Total Price : {prices} USD</h2>
            </div>
        </div>
    );
};

Carts.propTypes = {
    carts: PropTypes.array,
    creditHr: PropTypes.number,
    remainingCredit: PropTypes.number,
    prices: PropTypes.number,
}

export default Carts;
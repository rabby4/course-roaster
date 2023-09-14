import Cart from "../Cart/Cart";

const Carts = ({carts}) => {
    return (
        <div className="w-1/4">
            <div className="bg-white p-7 rounded-xl">
                <h2 className="text-lg font-semibold text-blue-500 border-b-2 pb-5">Credit Hour Remaining 7 hr</h2>
                <h2 className="text-xl font-bold py-5">Course Name:</h2>
                <div className="pb-5">
                    {/* <ol>
                        <li>1 Introduction to c programming</li>
                        <li>1 Introduction to c programming</li>
                        <li>1 Introduction to c programming</li>
                    </ol> */}
                    {
                        carts.map((cart, index) => <Cart key={index} cart={cart}></Cart>)
                    }
                </div>
                <h3 className="border-y-2 py-5">Total Credit Hour : 13</h3>
                <h2 className="font-semibold pt-5">Total Price : 48000 USD</h2>
            </div>
        </div>
    );
};

export default Carts;
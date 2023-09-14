
const Course = ({course, cartHandler, creditTime, remainingTime}) => {
    const {image, title, details, timing, price} = course;
    return (
        <div className="bg-white p-5 space-y-4 rounded-xl flex flex-col ">
            <img src={image} alt="" />
            <h2 className="text-lg font-semibold line-clamp-1">{title}</h2>
            <p className="text-sm text-gray-500">{details}</p>
            <div className="flex justify-between text-gray-500">
                <p>Price: ${price}</p>
                <p>Credit: {timing}hr</p>
            </div>
            <button onClick={() => {cartHandler(course); creditTime(timing); remainingTime(timing)} } className="w-full bg-blue-500 text-white py-3 rounded-lg font-semibold self-end">Select</button>
        </div>
    );
};

export default Course;
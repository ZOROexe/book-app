import {FiShoppingCart} from "react-icons/fi"
import { Link } from "react-router-dom"
import { getImgUrl } from "../../utils/getImgurl"
import { useDispatch } from "react-redux"
import { addToCart } from "../../redux/features/cart/cartSlice";

export default function BookCard({ book }) {
    const dispatch = useDispatch();
    const handleAddToCart = (product) => {
        dispatch(addToCart(product));
    }

    return (
        <div className=" rounded-lg transition-shadow duration-300 ml-5">
            <div className="flex flex-col sm:flex-row sm:items-center sm:h-72  sm:justify-center gap-1 ">
                <div className="sm:h-72 h-44 sm:flex-shrink-0 rounded-md">
                    <Link to={`/books/${book._id}`}>
                    <img
                    src={`${getImgUrl(book?.coverImage)}`}
                    alt=""
                    className="w-full bg-cover p-3 rounded-md cursor-pointer hover:scale-105 transition-all duration-200"
                    />
                </Link>
                </div>

                <div className="flex flex-col justify-between flex-grow sm:min-h-60 gap-4">  
                    <Link to={`/books/${book._id}`}> 
                        <h3 className="text-xl font-semibold hover:text-blue-600 mb-7 max-h-3">
                        {book?.title}
                        </h3></Link>
                    <p className="text-gray-600 mb-3">{book?.description.length > 80 ? `${book?.description.slice(0,80)}...`: book?.description}</p>
                    <p className="font-medium mb-3">
                        ${book?.newPrice} <span className="line-through font-normal ml-2">${book?.oldPrice}</span>
                    </p>
                    <button onClick={() => handleAddToCart(book)} className="btn-primary space-x-1 flex items-center gap-1 whitespace-nowrap">
                        <FiShoppingCart className="" />
                        <span>Add to Cart</span>
                    </button>   
                </div>
            </div>        
        </div>
    )
}
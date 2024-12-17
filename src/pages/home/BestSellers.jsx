import { useState, useEffect, useRef } from "react"
import BookCard from "../books/BookCard";
//swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
export default function BestSellers() {
    const [books, setBooks] = useState([]);
    const [selectedCategory, setselectedCategory] = useState("Choose a genre");
    const categories = ["Choose a genre", "Business", "Horror", "Fiction", "Adventure"];

    useEffect(() => {
        fetch("data.json").then((result) => result.json()).then((data) => setBooks(data));
    }, [])

    const filteredBooks = selectedCategory === "Choose a genre" ? books : books.filter(
        (book) => book.category === selectedCategory.toLowerCase());
    console.log(filteredBooks);


    return (
        <div className="py-10">
            <h2 className="text-3xl font-semibold mb-6">Top Sellers</h2>
            <div className="mb-8 flex items-center">
                <select onChange={(e) => setselectedCategory(e.target.value)} className="border bg-[#EAEAEA] rounded-md focus:outline-none border-gray-300 px-4 py-2">
                {
                    categories.map((items, index) => 
                        <option key={index} value={items}>{items}</option>
                    )
                }
                </select>
            </div>

            <div>
                <Swiper
                navigation={true}
                slidesPerView={1}
                spaceBetween={30}
                breakpoints={{
                640: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                },
                768: {
                    slidesPerView: 2,
                    spaceBetween: 40,
                },
                1024: {
                    slidesPerView: 2,
                    spaceBetween: 50,
                },
                1180: {
                    slidesPerView: 3,
                    spaceBetween: 50,
                }
                }}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                {
                    filteredBooks.length > 0 && filteredBooks.map((book, index) => 
                        <SwiperSlide key={index}><BookCard book={book} /></SwiperSlide>
                    ) 
                }
            </Swiper>
            </div>
        </div>
        
    )
}
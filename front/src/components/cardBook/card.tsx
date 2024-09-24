import Link from "next/link";
//Interface
import { IBook } from "@/interfaces/Ibook";
//Assets
import StarIcon from '/public/assets/star.svg';
import FavoriteIcon  from '/public/assets/favorite1.svg';

const Card: React.FC<{ book: IBook }> = ({ book: { book_id, title, author, categories,photoUrl} }) => {
    return (
        <div className="relative bg-white-300 w-full h-fit flex flex-col justify-evenly p-4 border border-gray-200 rounded-lg shadow-md ">
            <div key={book_id} className="flex items-center p-6 gap-6">
                <div className="w-full h-full  flex justify-center items-center bg-white-500 ">
                    <img src={photoUrl} alt={title} className="w-full h-fit object-cover" />
                        <button className="absolute left-14 top-14 bg-custom-gradient  flex justify-center items-center rounded-xl hover:shadow-fav  transition-shadow duration-200 z-10 ">
                            <FavoriteIcon />
                        </button>
                    <div className=" bg-white">
                        <span className="absolute left-14 bottom-14 bg-custom-gradient  flex justify-center items-center rounded-md ">
                            {categories.find((category) => category.name === "Satire") && (
                                <div className="py-1.5 px-4 text-white drop-shadow-dark text-smallBold">
                                    Destacado 
                                </div>
                            ) }
                        </span>
                    </div>
                </div>

          
                <div className="w-full flex flex-col items-center text-center gap-2">
                    <h4 className="text-pBold font-bold">{title}</h4>
                    <h5 className="text-semiSmallBold text-gray-700">{author}</h5>
                    <div className=' px-6'>
                        {categories.map((category) => (
                            <Link href={`/library/categories/${category.name}`}>
                            <button key={category.id} className='w-fit px-4 py-1 rounded-md text-small border border-white-700 m-1 hover:bg-white-500'>

                                {category.name}
                            </button>
                            </Link>
                            ))}
                        
                    </div>

                    <div className="flex items-center justify-center mt-2">
                        <span className="font-bold text-lg mr-2">4.2</span>
                        <StarIcon/>
                    </div>

                    <Link className="mt-4 w-full py-2 bg-blue text-white text-semiSmall rounded-md hover:bg-blue-300" href={`/library/${book_id}`}>
                        <button className="">
                                Leer Prólogo
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};


export default Card;

import Link from "next/link";
//Interface
import { IBook } from "@/interfaces/Ibook";
//Assets
import StarIcon from '/public/assets/star.svg';
import FavoriteIcon  from '/public/assets/favorite.svg';

const Card: React.FC<{ book: IBook }> = ({ book: { book_id, title, author, categories,photoUrl} }) => {
    return (
        <div className="bg-white-300 w-full h-full flex flex-col justify-evenly p-4 border border-gray-200 rounded-lg shadow-md ">
            <div key={book_id} className="flex items-center">
                <div className="w-full flex justify-center items-center ">
                    <img src={photoUrl} alt={title} className="h-64 object-contain" />
                </div>

          
                <div className="w-full flex flex-col items-center text-center gap-2">
                    <div className="w-full text-right">
                        <button>
                            <FavoriteIcon/>
                        </button>
                    </div>
                    <h4 className="text-h5 font-bold">{title}</h4>
                    <h5 className="text-pBold text-gray-700">{author}</h5>
                    <div className=' px-6'>
                        {categories.map((category) => (
                            <Link href={`/library/categories/${category.name}`}>
                            <button key={category.id} className='w-fit px-4 py-1 rounded-md text-semiSmall border border-white-700 m-1 hover:bg-white-500'>

                                {category.name}
                            </button>
                            </Link>
                            ))}
                        
                    </div>

                    <div className="flex items-center justify-center mt-2">
                        <span className="font-bold text-lg mr-2">4.2</span>
                        <StarIcon/>
                    </div>

                    <Link className="mt-4 w-full py-2 bg-blue text-white rounded-md hover:bg-blue-300" href={`/library/${book_id}`}>
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

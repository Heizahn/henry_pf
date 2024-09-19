import { IBook } from "@/interfaces/Ibook";
//Assets
import StarIcon from '/public/assets/star.svg';
import FavoriteIcon  from '/public/assets/favorite.svg';

const Card: React.FC<{ book: IBook }> = ({ book: { id, title, author, genre, year, cover } }) => {
    return (
        <div className="bg-white w-full h-72 p-4 border border-gray-200 rounded-lg shadow-md ">
            <div key={id} className="flex items-center">
                {/* Contenedor de la imagen */}
                <div className="w-full flex justify-center items-center ">
                    <img src={cover} alt={title} className="h-64 object-contain" />
                </div>

                {/* Detalles del libro */}
                <div className="w-full flex flex-col items-center text-center gap-2">
                    <div className="w-full text-right">
                        <button>
                            <FavoriteIcon/>
                        </button>
                    </div>
                    <h4 className="text-h5 font-bold">{title}</h4>
                    <h5 className="text-pBold text-gray-700">{author}</h5>
                    <p className="text-semismall text-gray-600">{genre}</p>

                    <div className="flex items-center justify-center mt-2">
                        <span className="font-bold text-lg">4.2</span>
                        <StarIcon/>
                    </div>

                    <button className="mt-4 w-full py-2 bg-blue text-white rounded-md hover:bg-blue-300">
                        Leer Prólogo
                    </button>
                </div>
            </div>
        </div>
    );
};


export default Card;

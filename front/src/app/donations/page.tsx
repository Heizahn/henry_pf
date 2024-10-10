"use client"
import BookIcon from "../../../public/assets/book.svg";
import ToolIcon from "../../../public/assets/construction.svg"
import World from "../../../public/assets/world1.svg"
import Mesagge from "../../../public/assets/sms.svg"
//
import { useUserStore } from "@/store/useUserStore";
import { HOST_API } from "@/config/ENV";


const Page = () => {


  const {user: userStore} = useUserStore();
  const token = userStore?.token;
  console.log(token);
  
  
  
  const handleDonation = async (amount:number) => {
    const userData = userStore
    console.log(userData?.userId);
    console.log(userData?.token);
    
    if (!userData){
      alert("Inicia sesión para donar");
      return
    }
    try {
      const response = await fetch(`${HOST_API}/donations/create-order`, {
        method: "POST",
        headers: {
					'Content-Type': 'application/json',
					Accept: 'application/json',
					Authorization: `Bearer ${token}`,
				},
        body: JSON.stringify({
          userId: userData?.userId,
          amount: amount,
          description: `Donación de $${amount} para el proyecto de libros`,
          payerEmail: userData?.email, 
        }),
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }

      const data = await response.json();
      const redirect = data.mpLink;
      console.log(redirect);
      console.log("Orden creada exitosamente", data);
      if (redirect){
       return window.location.replace(redirect);
        
      }
      else {
        console.log("No se encontró init_point en la respuesta", data);
        
      }
    } catch (error) {
      console.error("Hubo un error en la donación", error);
    }
    
};

  return (
    <div className="w-content mx-10 mb-10 my-2 h-content flex rounded-xl border-2 border-black-500">
      {/* COPY */}
      <div className="w-3/6 h-[32rem] px-12 py-4 flex flex-col items-center justify-center mb-4">
        <div className="w-full flex flex-col gap-4">
          <h1 className="text-h2">Apoya el Futuro de la Lectura</h1>
          <p className="mb-4 text-h5">
            Tu donación ayuda a mejorar el acceso y la experiencia a toda la comunidad
          </p>
          <ol className="flex flex-col gap-6">
            <li className="flex items-center">
              <BookIcon className="w-10 h-8 mr-2" />
              Ampliar la colección de libros digitales.
            </li>
            <li className="flex items-center">
              <ToolIcon className="w-10 h-8 mr-2" />
              Mejorar las funciones de la app.
            </li>
            <li className="flex items-center">
              <World className="w-10 h-8 mr-2" />
              Mantener la plataforma gratuita y accesible para todos.
            </li>
            <li className="flex items-center">
              <Mesagge className="w-10 h-8 mr-2" />
              Mejorar las interacciones sociales
            </li>
          </ol>
        </div>
      </div>
      {/* CARDS */}
      <div className="w-3/6 h-[32rem]">
        <div className="w-full h-full flex justify-center items-center py-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-4/5">
            {/* CARD $5 */}
            <div className="flex flex-col items-center justify-between bg-white py-6 px-2 rounded-lg border-2 border-black-500 hover:ring-2 ring-red-500">
              <h2 className="text-2xl text-end font-bold text-gray-800 mb-4 flex flex-col gap-4 text-h5">
                Donar <span className="text-h2 text-center ">$5</span>
              </h2>
              <p className="text-gray-600 text-center mb-6 text-semiSmall">
                Tu donación contribuirá a mantener la plataforma accesible.
              </p>
              <button
                onClick={() => handleDonation(5)}
                className="bg-red-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-red-600 transition-colors duration-300"
              >
                Donar <br /> $5
              </button>
            </div>

            {/* CARD $10 */}
            <div className="flex flex-col items-center justify-between bg-white p-6 rounded-lg border-2 border-black-500 hover:ring-2 ring-red-500">
              <h2 className="text-2xl text-end font-bold text-gray-800 mb-4 flex flex-col gap-4 text-h5">
                Donar <span className="text-h2">$10</span>
              </h2>
              <p className="text-gray-600 text-center mb-6 text-semiSmall">
                Ayuda a mejorar la experiencia y agregar más libros digitales.
              </p>
              <button
                onClick={() => handleDonation(10)}
                className="bg-red-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-red-600 transition-colors duration-300"
              >
                Donar $10
              </button>
            </div>

            {/* CARD $20 */}
            <div className="flex flex-col items-center justify-between bg-white p-6 rounded-lg border-2 border-black-500 hover:ring-2 ring-red-500">
              <h2 className="text-2xl text-end font-bold text-gray-800 mb-4 flex flex-col gap-4 text-h5">
                Donar <span className="text-h2">$20</span>
              </h2>
              <p className="text-gray-600 text-center mb-6 text-semiSmall">
                Contribuye a nuevas funciones y mantener el contenido gratuito.
              </p>
              <button
                onClick={() => handleDonation(20)}
                className="bg-red-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-red-600 transition-colors duration-300"
              >
                Donar $20
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;

  
  
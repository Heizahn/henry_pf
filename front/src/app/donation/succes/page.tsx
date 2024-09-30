"use client";
import React from "react";
import { useRouter } from "next/navigation";
//assets
import duck from "../../../../public/assets/images/Sleepy Cat.gif"

const Page = () => {
  const router = useRouter();

  const handleGoHome = () => {
    router.push("/"); // Redirecciona a la página principal
  };

  return (
    <div className="flex h-[32rem] mx-auto my-6 mr-4 p-12">
      {/* Sector de la imagen */}
      <div className="flex-1 flex justify-center items-center">
        <figure className="max-w-full max-h-full object-scale-down">
          <img src={duck.src} alt="duck" className="max-w-full max-h-full object-scale-down" />
          {/* Si deseas añadir un pie de foto, descomenta la siguiente línea */}
          {/* <figcaption className="text-center text-gray-600">Un pato surfeando</figcaption> */}
        </figure>
      </div>
  
      {/* Sector del mensaje */}
      <div className="flex-1 bg-white p-8 rounded-lg  text-center flex flex-col justify-center">
        <h1 className="text-h2 font-bold text-red-500 mb-4">¡Gracias por ser parte de nuestra historia!</h1>
        <p className="text-gray-700 mb-6 text-p">
        Seguiremos mejorando nuestra plataforma para que todos puedan disfrutarla. ¡Apreciamos tu contribución!
        </p>
        <div className="text-lg text-semiSmallBold text-gray-600 mb-8">
          Si tienes alguna pregunta, no dudes en <a href="/contact" className="text-blue-600 underline">contactarnos</a>.
        </div>
        <button
          onClick={handleGoHome}
          className="w-3/6 m-auto bg-blue-500 text-white text-semiSmallBold py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors duration-300"
        >
          Volver a inicio
        </button>
        <button
          onClick={handleGoHome}
          className="w-3/6 m-auto bg-blue-500 text-white text-semiSmallBold py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors duration-300"
        >
          Ir a libreria
        </button>
      </div>
    </div>
  );
}  

export default Page;

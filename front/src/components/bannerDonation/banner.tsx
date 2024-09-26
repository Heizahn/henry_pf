import Link from "next/link";

const BannerDonation = () => {
    return (
        <div className="sticky top-0 w-full h-8 bg-white flex justify-center items-center z-20 bg-white">
            <div className="absolute bg-white z-12 top-3 pl-4 left-0">
                <Link href="../donation">
                <button className="relative flex items-center justify-center text-smallBold p-0 border-none bg-transparent cursor-pointer transition-all duration-50 select-none touch-manipulation transform">
                <span className="shadow absolute top-0 left-0 w-full h-full bg-black/25 rounded-lg translate-y-0.5 transition-transform duration-[600ms] ease-[cubic-bezier(.3,.7,.4,1)] hover:translate-y-1 active:translate-y-[0.05rem]"></span>

                <span className="edge absolute top-0 left-0 w-full h-full bg-gradient-to-l from-[#ee0036] via-[#810028] to-[#4c001a] rounded-lg"></span>

                {/* Contenedor del contenido para centrar el SVG y el texto */}
                <span className="front relative flex items-center justify-center py-1.5 px-4 rounded-lg text-white bg-red-500 translate-y-[-0.25rem] transition-transform duration-[200ms] ease-[cubic-bezier(.3,.7,.4,1)] hover:translate-y-[-0.375rem] active:translate-y-[0.01rem]">
                    <span className="mr-2">Donar</span>

                    <svg
                    className="w-4 h-4"
                    width="16"
                    height="15"
                    viewBox="0 0 16 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    >
                    <path
                        d="M8 14.6844L6.84 13.6444C5.49333 12.4311 4.38 11.3844 3.5 10.5044C2.62 9.62439 1.92 8.83439 1.4 8.13439C0.88 7.43439 0.516667 6.79106 0.31 6.20439C0.103333 5.61773 0 5.01773 0 4.40439C0 3.15106 0.42 2.10439 1.26 1.26439C2.1 0.424395 3.14667 0.00439453 4.4 0.00439453C5.09333 0.00439453 5.75333 0.151061 6.38 0.444395C7.00667 0.737728 7.54667 1.15106 8 1.68439C8.45333 1.15106 8.99333 0.737728 9.62 0.444395C10.2467 0.151061 10.9067 0.00439453 11.6 0.00439453C12.8533 0.00439453 13.9 0.424395 14.74 1.26439C15.58 2.10439 16 3.15106 16 4.40439C16 5.01773 15.8967 5.61773 15.69 6.20439C15.4833 6.79106 15.12 7.43439 14.6 8.13439C14.08 8.83439 13.38 9.62439 12.5 10.5044C11.62 11.3844 10.5067 12.4311 9.16 13.6444L8 14.6844ZM8 12.5244C9.28 11.3777 10.3333 10.3944 11.16 9.5744C11.9867 8.7544 12.64 8.04106 13.12 7.43439C13.6 6.82773 13.9333 6.28773 14.12 5.81439C14.3067 5.34106 14.4 4.87106 14.4 4.40439C14.4 3.60439 14.1333 2.93773 13.6 2.40439C13.0667 1.87106 12.4 1.60439 11.6 1.60439C10.9733 1.60439 10.3933 1.78106 9.86 2.13439C9.32667 2.48773 8.96 2.93773 8.76 3.48439H7.24C7.04 2.93773 6.67333 2.48773 6.14 2.13439C5.60667 1.78106 5.02667 1.60439 4.4 1.60439C3.6 1.60439 2.93333 1.87106 2.4 2.40439C1.86667 2.93773 1.6 3.60439 1.6 4.40439C1.6 4.87106 1.69333 5.34106 1.88 5.81439C2.06667 6.28773 2.4 6.82773 2.88 7.43439C3.36 8.04106 4.01333 8.7544 4.84 9.5744C5.66667 10.3944 6.72 11.3777 8 12.5244Z"
                        fill="white"
                    />
                    </svg>
                </span>
                </button>

                </Link>
            </div>
        </div>
    );
};

export default BannerDonation;

import { redirect } from "next/dist/server/api-utils";

async function googleAuth() {
    const fetchData = async () => {
        try {
            const response = await fetch(`http://localhost:3000/auth/google`,{
                headers: {
                    "Content-Type": "",
                    redirect:"follow"
                }
            });
            if (!response.ok) throw new Error('Error fetching data');
            const data = await response.json();
            console.log(data);
        } catch (error) {
            if (error instanceof Error) {
                console.error(error.message);
            }
        }
    };

    // Ejecuta fetchData
    await fetchData();
}

// Exporta directamente la función por defecto
export default googleAuth;

import { useEffect } from "react";
import { generateToken } from "../fetches/auth";


export default function HomePage() {
    useEffect(() => {
        const token = localStorage.getItem("authToken");

        if (!token) {
            generateToken("Your Name Here")
                .then(() => console.log("Token created"))
                .catch(console.error);
        }
    }, []);

    return (
        <>
            <div>
                <h1>Smart Home</h1>
            </div>
        </>
    )
}


import { z } from "zod";
import Cookies from 'js-cookie';

const loginScema = z.object({
    username: z.string("Intast en gyldig email adresse."),
    password: z.string().min(2, "password skal være mindst 2 karakterer.")
})

export async function loginUser(prevState, formData) {

    const username = formData.get("username")
    const password = formData.get("password")
    const cookiestore = await Cookies()
    console.log(username, password);


    if (username === prevState.values.username && password === prevState.values.password) {
        return prevState
    }
    const result = loginScema.safeParse({ username, password })

    if (!result.success) {
        console.log(z.flattenError(result.error).fieldErrors)

        return {
            values: { username, password },
            errors: z.flattenError(result.error).fieldErrors
        }
    }

    const response = await fetch("https://exercise.mobicom-pro.com/api/token", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ username, password })
    })
    if (!response.ok) {
        return {
            values: { username, password },
            errors: { form: [""] }
        }
    }

const data = await response.json()
cookiestore.set("authToken", data.token)
cookiestore.set("username", data.userId)

}
import { router } from "expo-router"
import { onAuthStateChanged } from "firebase/auth"
import { auth } from "../config"

const Index = () => {
    onAuthStateChanged(auth, (user) => {
        if (user)
        {
            router.replace("memo/list")
        } else
        {
            router.replace("auth/log_in")
        }
    })
}
export default Index
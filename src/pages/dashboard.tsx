import firebaseApp from "@/lib/firebaseConfig"
import { getAuth } from "firebase/auth"
import { useRouter } from "next/router"
import { useEffect } from "react"
import { useAuthState } from "react-firebase-hooks/auth"

export default function Dashboard(){
    const auth = getAuth(firebaseApp)
    const [user, loading, error] = useAuthState(auth)
    const router = useRouter()

    useEffect(()=>{
        if(!(user||loading)){
            router.push('/login')
        }
    })
    
    return <>
        <h1>Dashboard</h1>
        
    </>
}
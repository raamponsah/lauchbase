import { getAuth } from 'firebase/auth'
import {useSignInWithGoogle} from 'react-firebase-hooks/auth'
import firebaseApp from '@/lib/firebaseConfig'
import { useEffect } from 'react'

export default function LoginPage(){
    const auth = getAuth(firebaseApp)
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth)

    useEffect(()=>{
        if(!(user||loading)){
            
        }
    },[user])

    return <><button onClick={()=>signInWithGoogle()}>Login with Google</button></>

}
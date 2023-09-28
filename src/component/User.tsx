import { useState } from "react"
type AuthUser = {
    name: string
    email: string
}
export const User = () => {
const [IsLoggedIn, setIsLoggedIn] = useState<AuthUser | null>(null);
const LoggedIn = () =>{
setIsLoggedIn({
    name: 'Yusuf',
    email: 'yusufCodes@gmail.com'
})
}
const LoggedOut = () => {
    setIsLoggedIn(null);
}
  return (
    <div>
        <button onClick={LoggedIn}>Login</button>
        <button onClick={LoggedOut}>Logout</button>
        <h2>{IsLoggedIn ? `User name is ${IsLoggedIn?.name}` : "Login to see your data"}</h2>
        <h2>User email is {IsLoggedIn?.email}
    </h2>
    </div>
  )
}

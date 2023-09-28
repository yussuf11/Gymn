import {useState} from 'react'

export const Login = () => {
    const [isLoggedin, setisLoggedin] = useState(false);
    const handleLogin = () => {
setisLoggedin(true);
    }
    const handleLogout = () => {
setisLoggedin(false);
    }
  return (
    <div>
        <button onClick={handleLogin}></button>
        <button onClick={handleLogout}></button>
        <div>User is {isLoggedin ? "Logged in" : "Logged out"}</div>
    </div>
  )
}

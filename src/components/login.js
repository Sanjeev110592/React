
import './login.css'
export function LoginPage(){
    return(
        <>
           <form>
           <h2>User login</h2>
           <dl>
            <dt>User name</dt>
            <dd><input type="text" className="user"></input></dd>
            <dt>Password</dt>
            <dd><input type="password" className="user"></input></dd>
           </dl>
           <button>Login</button>
           </form>
        </>
    )
}
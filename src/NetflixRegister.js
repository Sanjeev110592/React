import "./NetflixRegister.css";
export function NetflixRegister(){
    return(
        <div className="register">
            <p>Ready to watch?Enter your email to create or restart your membership.</p>
            <input type="email" placeholder="Email address" id="email"/>
            <button className="btn">Get started</button>
        </div>
    )
}

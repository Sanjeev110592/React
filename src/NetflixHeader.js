import "./NetflixHeader.css" ;
export function NetflixHeader(){
    return(
          <div className="header" >
            <div className="span">
                <span>NETFLIX</span>
            </div>
            <div className="signIn">
                <select>
                    <option>English</option>
                    <option>हिन्दी</option>
                </select>
                <button>Sign In</button>
            </div>
          </div>
    )
}
import "./NetflixIndex.css" ;
import { NetflixHeader } from "./NetflixHeader";
import { NetflixHeading } from "./NetflixHeading";
import { NetflixRegister } from "./NetflixRegister";
export function NetflixIndex(){
    return(
        <>
          <div className="banner">
            <div className="banner_alpha">
            </div>
            <NetflixHeader/>
            <NetflixHeading/>
            <NetflixRegister/>
          </div>
        </>
    )
}
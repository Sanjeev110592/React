
import "./Disxription.css";
export function Discription(){
    let obj = {
        brand : "Speaker",
        price : 4800,
        stock : false,
        photo : "https://images.unsplash.com/photo-1510766315117-0f791eb90af7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
    }
    return(
        <div className="speaker">
            <dl>
                <dt>Name</dt>
                <dd>{obj.brand}</dd>
                <dt>Price</dt>
                <dd>{obj.price}</dd>
                <dt>Stock</dt>
                <dd>{(obj.stock===true)?"Available":"Unavailable"}</dd>
                <dt>Photo</dt>
                <dd>
                <img src={obj.photo} width="100" height="100" alt="Speaker"/>
                </dd>
            </dl>
        </div>
    )
}
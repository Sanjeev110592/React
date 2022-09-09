
import "./MapinReact.css";
export function Categroise(){
    const categories = ["Electronics","Fashion","Mens","Woments","Mobile","Games","Colores","Sports","Kids"]
    return(
        <div>
           <h2>Select Category</h2>
           <select>
              {
                categories.map((category)=>
                    <option>{category}</option>                    
                )
              }
           </select>
           <h2>List of Category</h2>
           <ul>
            {
                categories.map(items=>
                    <li>{items}</li>
                )
            }
           </ul>
           <h2>Ordered list</h2>
           <ol>
            {
                categories.map((items)=>
                    <li>{items}</li>
                )
            }
           </ol>
        </div>
    )
}
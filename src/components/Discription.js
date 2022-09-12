
import "./Disxription.css";
export function Discription(){
    let arr = [
        {category:"electronics", products:["radoio","tv","mobile","laptop"]},
        {category:"fashion", products:["cap","goggles","t-shirts","umbrella"]}
    ];
    const products = [
        {Name: "Sony Speaker", Price:5600.32},
        {Name: "Nike Casuals", Price:7000.42}
     ];
     const product = [
        {Name: "Sony Speaker", Price:5600.32, Photo:"", Rating:{Rate:4.2, Count:3000}},
        {Name: "Nike Casuals", Price:7000.42, Photo:"https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=1600", Rating:{Rate:3.6, Count:6020}},
        {Name: "Winter Jacket", Price:2400.44, Photo:"https://images.pexels.com/photos/157675/fashion-men-s-individuality-black-and-white-157675.jpeg?auto=compress&cs=tinysrgb&w=1600", Rating:{Rate:4.6, Count: 446}}
     ];
    return(
        <div className="category">
            <h2>Menu</h2>
            <ol>
                {
                    arr.map(type=>
                    <li key={type.category}>{type.category}
                    <ul>
                        {
                             type.products.map(items=><li key={items}>{items}</li>)
                        }
                    </ul>                    
                    </li>)
                }
            </ol>
            <h2>Select option</h2>
            <select>
                {
                    arr.map(sam=>
                        <optgroup label={sam.category} key={sam.category}>
                        {
                            sam.products.map(main=><option key={main}>{main}</option>)
                        }
                        </optgroup>)
                }
            </select>
            <h2>Product table</h2>
            <table>
                <thead>
                    <tr>
                      <th>Name</th>
                      <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map(itm=><tr>
                            <td>{itm.Name}</td>
                            <td>{itm.Price}</td>
                        </tr>)
                    }
                </tbody>
            </table>
            <h2>Card</h2>
            <div>
                {
                    product.map(product=>
                    <div>
                        <img src={product.Photo} width="150px" height="200px" alt="look"/>
                        <h3>{product.Name}</h3>
                        <dl>
                            <dt>Price</dt>
                            <dd>{product.Price}</dd>
                            <dt>Rating</dt>
                            <dd>{product.Rating.Rate}[{product.Rating.Count}]</dd>
                        </dl>
                    </div>

                    )
                }
            </div>
        </div>
    )
}
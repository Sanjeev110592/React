
import './TwoWayBinding.css'
import {useState} from 'react'

export function DataBinding(){
    let [items,setItems] = useState({Name:"tv",Price:"0.0",Stock:true,City:"Lucknow",Rating:"4.5"})
    let City = ["Lucknow","Kanpur","Varansi","Allahabad","Bareilly","Hydrabad","Nagpur","mumbai"]

    function handleName(event){
        setItems({
            Name:event.target.value,
            Price:items.Price,
            Stock:items.Stock,
            City:items.City,
            Rating:items.Rating
        })
    }
    function handlePrice(event){
        setItems({
            Name:items.Name,
            Price:event.target.value,
            Stock:items.Stock,
            City:items.City,
            Rating:items.Rating
        })
    }
    function handleStock(event){
        setItems({
            Name:items.Name,
            Price:items.Price,
            Stock:event.target.checked,
            City:items.City,
            Rating:items.Rating
        })
    }
    function handleCity(event){
        setItems({
            Name:items.Name,
            Price:items.Price,
            Stock:items.Stock,
            City:event.target.value,
            Rating:items.Rating
        })
    }
    function handleRating(event){
        setItems({
            Name:items.Name,
            Price:items.Price,
            Stock:items.Stock,
            City:items.City,
            Rating:event.target.value 
        })
    }

    return(
        <div className='parent'>
            <div>
                <dl>
                    <dt>Name:</dt>
                    <dd><input type="text" value={items.Name} onChange={handleName} ></input></dd>
                    <dt>Price:</dt>
                    <dd><input type="Number" value={items.Price} onChange={handlePrice} ></input></dd>
                    <dt>Stock:</dt>
                    <dd><input type="text" value={(items.Stock === true)? "Available":"Unavailable"} checked={items.Stock} onChange={handleStock} ></input></dd>
                    <dt>City:</dt>
                    <dd>
                        <select onChange={handleCity}>
                            {
                                City.map(city=>
                                    <option key={city}>{city}</option>)
                            }
                        </select>
                    </dd>
                    <dt>Rating</dt>
                    <dd><input type="Number" value={items.Rating} onChange={handleRating}></input></dd>
                </dl>
            </div>
            <div>
            <dl>
                    <dt>Name</dt>
                    <dd>{items.Name}</dd>
                    <dt>Price</dt>
                    <dd>{items.Price}</dd>
                    <dt>Stock</dt>
                    <dd>{(items.Stock===true)?"Available":"Unavailable"}</dd>
                    <dt>City</dt>
                    <dd>{items.City}</dd>
                    <dt>Rating</dt>
                    <dd>{items.Rating}</dd>
                </dl>
            </div>
        </div>
    )
}
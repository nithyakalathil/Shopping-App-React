import React, { useState } from 'react'
import Navbar from './Navbar'

const Adddata = () => {

const [data,changedata]=useState(
    {
        "id":"",
        "title":"",
        "price":"",
        "Desc":"",
    }
)

const inputH=(event)=>{
    changedata({...data,[event.target.name]:event.target.value})
}
const readV=()=>{
    console.log(data)
}

  return (
    <div>
<Navbar/>
<div className="container">
    <div className="row">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

<div className="row g-3">
    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

<label htmlFor="" className="form-label">id</label>
<input type="text" className="form-control" name='id' value={data.id} onChange={inputH}/>

    </div>
    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

    <label htmlFor="" className="form-label">title</label>
    <input type="text" className="form-control" name='title' value={data.title} onChange={inputH}/>

    </div>
    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

    <label htmlFor="" className="form-label">price</label>
    <input type="text" className="form-control" name='price' value={data.price} onChange={inputH}/>

    </div>
    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

    <label htmlFor="" className="form-label">Description</label>
    <textarea name="Desc" id="" className="form-control"  value={data.Desc} onChange={inputH}></textarea>

    </div>
    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

<button className="btn btn-success" onClick={readV}>Submit</button>

    </div>
</div>

        </div>
    </div>
</div>

    </div>
  )
}

export default Adddata
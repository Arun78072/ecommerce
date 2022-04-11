import React,{useState,useEffect} from 'react';

const Menp=()=>{
    const [fake,setFake]=useState([]);
    console.log(fake);
    useEffect(()=>{
        fakestore();
    },[])

        const fakestore=async()=>{
        const response=await fetch("https://fakestoreapi.com/products");
        // console.log(response);
        const jsonData=await response.json();
        // console.log(jsonData);
        setFake(jsonData);
    }
    fakestore();
    return(
        <>
        <div className="menproduct">
        <h1>All Product  </h1>
        <div className="pro__container">
            {fake.map((values)=>{
                return(
                    <>
                    <div className="pro__content">
                        <div className="img__sec"><img src={values.image} alt ={values.title} /></div>
                        <h5>{values.title}</h5>
                        <p>Price = <span>{values.price}</span></p>
                    </div>
                    </>
                )
            })}
            
        </div>
        </div>
        </>
    )
}
export default Menp;
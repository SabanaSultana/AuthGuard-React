import React, { useEffect } from 'react'
import { getUrl, postUrl, fetchedGetRequest } from "../GlobalApi/Apis";
import { useState } from 'react';

const Home = () => {
  const [product,setProduct]=useState([])
  useEffect(()=>{
    fetchSingleProduct()
  },[])

  const fetchSingleProduct=async()=>{
    try{
        const response = await fetchedGetRequest(getUrl.getSingleProduct);
        // add cheking
        console.log("single product ",response)
    }
    catch(err){

    }
  }
  return (
    <div>
      Home Page
    </div>
  )
}

export default Home

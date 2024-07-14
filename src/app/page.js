'use client'
import axios from "axios";
import { useEffect,useState} from "react";
export default function Home() {
    const [contryFlags,setcontryFlags]=useState([]);
    useEffect(()=>{
      try {
        const url="https://xcountries-backend.azurewebsites.net/all"
      axios.get(url).then((response)=>{
        console.log(response)
        setcontryFlags(response.data)
      })
      } catch (error) {
        console.log(error)
      }
      
       
    })
  return (
    <main className="flex min-h-screen items-center flex-wrap justify-between p-24">
    {contryFlags?.map((data)=>{
      return(
        <>
        <div className="flag-container">
          <img alt={data.abbr} src={data.flag}/>
          <div>{data.name}</div>
        </div>
        </>
      )
    })}
    </main>
  );
}

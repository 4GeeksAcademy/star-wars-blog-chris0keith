import { useEffect, useState } from "react";
import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

export const Home = () => {
	const [planet,setPlanet]=useState(null)
	useEffect(()=>{
		const getPlanet = async()=>{
			const response = await fetch("https://www.swapi.tech/api/planets/1/")
			const data =  await response.json()
			setPlanet(data.result.properties)
			
		}
		getPlanet()
		
	},[])
	
  const {store, dispatch} =useGlobalReducer()

	return (
		<div className="text-center mt-5">
			<h1>Home</h1>
			<p>
				{planet ?(
				<p>Planet Name:{planet.name}</p>	
				):(
					<p>loading</p>
				)}
				
			</p>
		</div>
	);
}; 
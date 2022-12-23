import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getMeteos } from './meteoSlice'

function Meteo(){
    const {meteos,loading} = useSelector((state)=>state.meteo)
    const dispatch = useDispatch();
    useEffect (()=>{
        dispatch(getMeteos());
    },[]);

console.log(meteos.main)
    return(         

<h1 >Total Air vol. consumption <p className="total_consumption">{meteos.name}</p> </h1>        
    );
}
export default Meteo;
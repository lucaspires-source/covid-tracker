import React,{useEffect,useState} from 'react'
import {fetchDailyData} from '../../api'
import{Line} from 'react-chartjs-2'
import styles from './Chart.module.css'
const Chart = () => {

    const [daylyData,setDailyData] = useState({});
    useEffect(()=>{
        const fetchAPI = async () =>{
            setDailyData(await fetchDailyData())
        }

        fetchAPI()
    })

    const lineChart =(
        <Line
            data={{
                labels:'',
                datasets:[{}, {}]
            }}
        
        />

    )
    return (
        <div>

        </div>
    )
}
export default Chart
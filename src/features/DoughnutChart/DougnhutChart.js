import React from 'react';
import { Chart as ChartJS, registerables } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { useSelector} from "react-redux";
import './DoughnutChart.css';

ChartJS.register(...registerables);
const selectShareData = (state)=>state.HoodShareData.hoodshare;
const selectCouleur = (state)=>state.Colors.color;

export function DoughnutChart() {
    const couleur = useSelector(selectCouleur);
    const hoodshare = useSelector(selectShareData);
    const HoodShareLabel = hoodshare.map((item, index) => {
        return item.key;
      });
      const HoodShareValue = hoodshare.map((item, index) => {
        return item.value;
      });
    const ShareColor = couleur.map((item,index)=>{
        return item.name;
    });
    
const data = {
    labels : HoodShareLabel,
    datasets: [
        {
            label: 'Attendance for Week 1',
            data: HoodShareValue,
            borderColor: ['rgba(255,206,86,0.2)'],
            backgroundColor: ShareColor,
            pointBackgroundColor: 'rgba(255,206,86,0.2)',
    }

    ]
};



const options = {
    plugins: {
        
            padding:{
                top:30,
                bottom:30
            },
            responsive:true,
            animation:{
                animateScale: true,
                           }
        }
    }

  return <Doughnut options={options} data={data} />;
}

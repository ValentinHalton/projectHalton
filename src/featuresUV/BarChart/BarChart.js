import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { useSelector } from "react-redux";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
const selectUvData = (state) => state.HoodUvData.UvData;

export function BarChart() {
  var Bleu = 0;
  var BleuH = 0;
  var Blanc = 0;
  var Rouge = 0;
  var RougeH = 0;
  var limit = 13000;
  const UvData = useSelector(selectUvData);
  const graphicData = UvData.map((item,index)=>{
    const graphicDataItem = UvBar(item.uvConso,item.uvSavings);
    const graphicDataItemNamed = {name : item.name,...graphicDataItem}
    return graphicDataItemNamed;
  });
  console.log(graphicData)
  const UvUsage = UvData.map((item, index) => {
    return item.uvConso;
  });
  const UvSavings = UvData.map((item, index) => {
    return item.uvSavings;
  });
  const NameLabel = UvData.map((item, index) => {
    return item.name;
  });  
  console.log(UvUsage)
  var UvUsage0 = UvUsage[1]
  var UvSavings0 = UvSavings[1]
  

  function UvBar(UvUsage0, UvSavings0) {
    if (UvUsage0 > limit) {
      Bleu = limit;
      BleuH = 0;
      Rouge = UvUsage0 - limit;
      RougeH = UvSavings0;
    } else {
      Bleu = UvUsage0;
      if (UvSavings0 + UvUsage0 > limit) {
        BleuH = limit - UvUsage0;
        Rouge = 0;
        RougeH = UvSavings0 - BleuH;
      } else {
        BleuH = UvSavings0;
        Rouge = 0;
        RougeH = 0;
        Blanc = limit - (UvSavings0 + UvUsage0);
      }
      }
      return [Bleu, BleuH, Blanc, Rouge, RougeH]
    }
    var uvbardata = UvBar(UvUsage0,UvSavings0)
  console.log(uvbardata)
  console.log(graphicData[0][0])
  const data = {
    labels: NameLabel,
    datasets: [
      {
        label: "Dataset 1",
        data: graphicData.map((item,index)=>
        item[0]
        ),
        backgroundColor: "blue",
        stack: "Stack 0",

      },
      {
        label: "Dataset 2",
        data: graphicData.map((item,index)=>
        item[1]
        ),
        backgroundColor: "darkblue",
        stack: "Stack 0",
      },
      {
        label: "Dataset 3",
        data:  graphicData.map((item,index)=>
        item[2]
        ),
        backgroundColor: "white",
        stack: "Stack 0",
      },
      {
        label: "Dataset 4",
        data: graphicData.map((item,index)=>
        item[3]
        ),
        backgroundColor: "red",
        stack: "Stack 0",
      },
      {
        label: "Dataset 5",
        data:graphicData.map((item,index)=>
        item[4]
        ),
        backgroundColor: "darkred",
        stack: "Stack 0",
      },
    ],
  };

  const options = {
    borderWidth: 0,
    maintainAspectRatio: false,
    responsive: true,        
    barThickness:50,
    indexAxis: "y",
    scales: {
      y: {
        ticks: {
          display: false,
        },
      },
    },
  };

  //const UvBarData = UvBar(UvUsage,UvSavings)

  //  export const data = {
  //    labels : NameLabel,
  //    datasets: [
  //      {
  //        label: 'Dataset 1',
  //        data: [UvBarData[0]],
  //        backgroundColor: 'blue',
  //        stack: 'Stack 0',
  //      },
  //      {
  //        label: 'Dataset 2',
  //        data:  [UvBarData[1]],
  //        backgroundColor: 'darkblue',
  //        stack: 'Stack 0',
  //      },
  //      {
  //          label: 'Dataset 3',
  //          data:  [UvBarData[2]],
  //          backgroundColor: 'white',
  //          stack: 'Stack 0',
  //        },
  //        {
  //          label: 'Dataset 4',
  //          data:  [UvBarData[3]],
  //          backgroundColor: 'red',
  //          stack: 'Stack 0',
  //        },
  //        {
  //          label: 'Dataset 5',
  //          data:  [UvBarData[4]],
  //          backgroundColor: 'darkred',
  //          stack: 'Stack 0',
  //        },

  //    ],
  //  };

  // export function BarChart() {

  return <Bar options={options} data={data} />;
}

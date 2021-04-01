import React from 'react';
import {Line} from 'react-chartjs-2';

const state = {
labels: ['2021-02-03', '2021-02-04', '2021-02-05',
           '2021-02-06', '2021-02-07','2021-02-08','2021-02-09',' '],
  datasets: [
    {
      label: '',
      fill: false,
      drawTicks:false,
     
      backgroundColor: 'rgba(75,192,192,1)',
      borderColor: 'rgba(75,192,192,1)',
      borderWidth: 2,
     data: [0,0,0,0,0,0,0,1]
    }
  ]
}


 const options = {
  scales: {
    xAxes: [{
               gridLines: {
                  display: false
               }
            }],
    yAxes: [
      {
        gridLines: {
                  display: false
               },
        ticks: {
          max:1,
          min:0,
          stepSize:.25 
        },
      },
    ],
  },
} 

export default class Graph extends React.Component {
  render() {
    return (
      <div>
        <Line
          data={state}
          options={options}
        />
      </div>
    );
  }
}
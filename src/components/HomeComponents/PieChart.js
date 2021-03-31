import react , {useState} from 'react';
import "./PieChart.css";
import {withStyles} from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';
import Typography from '@material-ui/core/Typography';
import {Pie } from 'react-chartjs-2';
import SliderMarks from './SliderMarks';
const PrettoSlider  = withStyles({
  root : {color: 'MediumVioletRed' , height: 10 },
  thumb : {height : 25 , width : 25 , backgroundColor : 'white' , border : '3px solid  black' , marginTop : -9 , marginLeft : -9},
  track: { height : 10 , borderRadius : 4},
  rail : {height : 10 , borderRadius:4},
}) (Slider);
function PieChart()
{
  
  const[n , setn] = useState(2);
  const[duration , setDuration] = useState(200);
  const nMax = 20;
  const maxDuration = 360;
  

 const price = Math.round(n * duration);

  return (
    <div className="body">
      <div className="CalApp"> 
      <h2 className="CalHeading"> <u> Create Event </u> </h2>
          <div>
          <Typography gutterBottom > <strong> Number Of People  </strong> </Typography>
          <PrettoSlider value={n} marks={SliderMarks.marksInt} onChange={(event , vInt) => {setn(vInt)}} defaultValue={n} max={nMax} />
          </div>  
          <div>
          <Typography gutterBottom > <strong> Duration  </strong> </Typography>
          <PrettoSlider value={duration} marks={ SliderMarks.marksTenure} onChange={(event , vDur) => {setDuration(vDur)}} defaultValue={duration} max={maxDuration} />
          </div>
          <div>
            <Pie 
            data={{
              labels : [  'Price' ,'No. of People' ],
              datasets :[{
                data : [ price , duration],
                backgroundColor : ['navy' , 'turquoise']
              }]
            }}
            width ={200}
            height={210} />
              <div >
                  <button className="create-event-btn"> Create </button>
                </div>
               
            </div>
           

            
      </div>
    
      </div>

  );

}
export default PieChart;
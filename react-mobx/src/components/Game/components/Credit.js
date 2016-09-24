import React from 'react';
import Slider from 'material-ui/Slider';

export default function Sliders(){
  return(
    <div className="sliders">
      <p className="category">Podatek od nieruchomości</p>
      <Slider step={0.10} value={.5} 
        sliderStyle={{margin:'0 0 5px 0'}}/>
        <p className="category">Wyprzedaż majątku</p>
      <Slider step={0.10} value={.5} 
        sliderStyle={{margin:'0 0 5px 0'}}/>
    </div>
  );
}
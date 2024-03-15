import React, { useState } from 'react';
import Select from 'react-select';



const Drop = (options) =>{
  console.log(options);
    return (
        <div className='w-full border'>
        <Select > {options.options.map((option) => (
          <option key={option.value} value={option.value}>{option.label}</option>
        ))}</Select>
          
           </div>
    )
}

export default Drop ;
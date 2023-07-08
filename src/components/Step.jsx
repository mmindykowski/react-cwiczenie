import React, { useState, useEffect } from 'react';


const Step = (props) => {

    
    return ( <div className="box"><span>Kroki:</span><input onChange={(event) =>props.stepMethod(event)} type="number" /></div> );
}
 
export default Step;

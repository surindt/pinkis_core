import React, { useState, useEffect, useRef } from 'react';
import useScrollBlock from './useScrollBlock';
const Botton = (active1) =>{
    console.log(active1)
    const active2 = useRef(active1.active);
    const [blockScroll, allowScroll] = useScrollBlock();
    const [active, setActive] = useState(false);

    console.log(active)
    
    const handleActive = () => {
        
        if (active == false) {
            setActive(() => true)
            blockScroll();
            console.log(active)
        }
        if (active == true) {
            setActive(() => false)
            allowScroll();
            console.log(active)
        }
      }
    
    return(
      <div className='square'> 
        <div className="clickea" onClick={handleActive}>{active}</div>
      </div>
     
    );
}

export default Botton;
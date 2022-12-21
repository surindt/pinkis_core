import { useState, useEffect, useRef} from "react";

const SetBodyScroll = (active) => {
    const setOverflow = useRef(active);
    //const [bodyScroll, setBodyScroll] = useState(false);

    if (setOverflow.current == true) {
        document.body.style.overflow = "hidden";
        console.log(setOverflow.current, active);
    }
    if (setOverflow.current == false) {
        document.body.style.overflow = "scrolls";
        console.log(setOverflow.current, active);

    }

}

export default SetBodyScroll;
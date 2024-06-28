import React, { useState } from "react";

function Captcha() {
    let [count, setCount] = useState();
    let [i, setI] = useState(0);
    let [inputValue, setInput] = useState()
    let [confirm, setConfirm] = useState();
    let arr = ["sdadb@", "fgewe%", "rgwr*2"]
    function gen() {
       

        count = arr[i]
        setCount(count);
        setI(i + 1);

    }

    function ver() {
        // setInput(inputValue)
        console.log("value", inputValue);
        if (count == inputValue) {
            setConfirm("Verified Success");
        }
        else {
            setConfirm("Fail");
        }
    };

    return (
        <>
            <input type="text" value={count} />
            <button onClick={() => gen()}>Gernerate</button>
            <br />
            <input type="text" onChange={(e) => setInput(e.target.value)} value={inputValue} />
            <button onClick={ver}>Verify</button>
            <br />
            <h2>{confirm}</h2>
        </>
    )
}
export default Captcha;
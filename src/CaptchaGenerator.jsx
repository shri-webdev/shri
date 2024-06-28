import React, { useState } from "react";

function Captcha() {
    let [count, setCount] = useState();
    // let [i, setI] = useState(0);
    let [inputValue, setInput] = useState()
    let [confirm, setConfirm] = useState();
    let arr = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z',
             'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',
             '+', '!', '@', '#', '$', '%', '&','^','*','(',')',1,2,3,4,5,6,7,8,9,0  ];
    // let arr1 =['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    // let symbol =['+', '!', '@', '#', '$', '%', '&'];
    function gen() {
       
        let stringToGen =" ";
     
        for(let i=0; i<8; i++)
            {
                stringToGen = stringToGen + arr[[Math.floor(Math.random()*(arr.length-1))]]; 
            }

            setCount(stringToGen);
    }

    function ver() {
        // setInput(inputValue)
        console.log("value", inputValue);
        if (count == inputValue) {
            setConfirm("Matched");
        }
        else {
            setConfirm("Not Matched");
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
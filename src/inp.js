import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { add, minus, multiply, plus } from './redux/actions/type';
import { addaction, minusaction, multiplyaction, plusaction } from './redux/actions/counteractions';

const Inp = () => {
    const [count,setcount]=useState(0);
    const statecount = useSelector(state => state.counterr.count);
    const dis=useDispatch();
    console.log("lp: ");
    console.log(statecount);
    const ad=()=>{
        dis(addaction())
    }
    const mi=()=>{
        dis(minusaction())
    }
    const ad2=()=>{
        dis(plusaction())
    }
    const mul=(vl)=>{
        dis(multiplyaction(vl))
    }
    return (
        <div>
            <button onClick={()=>{mul(909999099900);}}>multiply</button>
            <p>{statecount}</p>
            <button onClick={()=>{
                ad2()
            }} >add2</button>
            <button onClick={()=>{
                ad()
            }} >add</button>
            <button onClick={()=>{
                mi()
            }}>minus</button>
        </div>
    );
}

export default Inp;
 
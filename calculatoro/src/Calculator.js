import { useState } from "react";

function Calculator(){
    var [value1,setValue1]=useState('')
    var [value2,setValue2]=useState('')
    var [output,setOutput]=useState('')
    var [operator,setOperator]=useState('')
    // console.log(output);
    function handleCalculate(){
        switch(operator){
            case '+':setOutput(Number(value1)+Number(value2))
            break;
            case '-':setOutput(Number(value1)-Number(value2))
            break;
            case 'X':setOutput(Number(value1)*Number(value2))
            break;
            case '/':setOutput(Number(value1)/Number(value2))
            break;
            case '%':setOutput(Number(value1)%Number(value2))
            break;
            default:{
            }
        }
    }    
    return(
        <div id="app">
            <p>{output}</p>
            <div>
                <button className="btn btn-primary" onClick={()=>setOutput('')}>AC</button>
                <button className="btn btn-primary">x</button>
                <button className="btn btn-primary" onClick={(e)=>setOperator(e.target.value)} value="%">%</button>
                <button className="btn btn-primary" onClick={(e)=>setOperator(e.target.value)} value="/">/</button>
            </div>
            <div>
                <button className="btn btn-primary" onClick={(e)=>operator?setValue2(value2+=e.target.value):setValue1(value1+=e.target.value)} value="7">7</button>
                <button className="btn btn-primary" onClick={(e)=>operator?setValue2(value2+=e.target.value):setValue1(value1+=e.target.value)} value="8">8</button>
                <button className="btn btn-primary" onClick={(e)=>operator?setValue2(value2+=e.target.value):setValue1(value1+=e.target.value)} value="9">9</button>
                <button className="btn btn-primary" onClick={(e)=>setOperator(e.target.value)} value="X">X</button>
            </div>
            <div>
                <button className="btn btn-primary" onClick={(e)=>operator?setValue2(value2+=e.target.value):setValue1(value1+=e.target.value)} value="4">4</button>
                <button className="btn btn-primary" onClick={(e)=>operator?setValue2(value2+=e.target.value):setValue1(value1+=e.target.value)} value="5">5</button>
                <button className="btn btn-primary" onClick={(e)=>operator?setValue2(value2+=e.target.value):setValue1(value1+=e.target.value)} value="6">6</button>
                <button className="btn btn-primary" onClick={(e)=>setOperator(e.target.value)} value="-">-</button>
            </div>
            <div>
                <button className="btn btn-primary" onClick={(e)=>operator?setValue2(value2+=e.target.value):setValue1(value1+=e.target.value)} value="1">1</button>
                <button className="btn btn-primary" onClick={(e)=>operator?setValue2(value2+=e.target.value):setValue1(value1+=e.target.value)} value="2">2</button>
                <button className="btn btn-primary" onClick={(e)=>operator?setValue2(value2+=e.target.value):setValue1(value1+=e.target.value)} value="3">3</button>
                <button className="btn btn-primary" onClick={(e)=>setOperator(e.target.value)}value="+">+</button>
            </div>
            <div>
                <button className="btn btn-primary">R</button>
                <button className="btn btn-primary" onClick={(e)=>operator?setValue2(value2+=e.target.value):setValue1(value1+=e.target.value)} value="0">0</button>
                <button className="btn btn-primary" onClick={(e)=>operator?setValue2(value2+=e.target.value):setValue1(value1+=e.target.value)} value=".">.</button>
                <button className="btn btn-primary" onClick={handleCalculate}>=</button>
            </div>
        </div>
    )
}
export default Calculator;
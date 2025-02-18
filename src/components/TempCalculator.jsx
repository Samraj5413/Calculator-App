import React, {useState} from 'react';
import Keys from './keys';

const TempCalculator = () => {

  const keys = [
    "AC",
    "C",
    "%",
    "/",
    "7",
    "8",
    "9",
    "*",
    "4",
    "5",
    "6",
    "-",
    "1",
    "2",
    "3",
    "+",
    ".",
    "0",
    "EQUALS",
];

  const [showResult, setShowResult] = useState(false);
  const [display, setDisplay] = useState("");

  const maxLimit = 15;

  const calculateResult = () => {
    if(display !== 0){
      try {
        let calcResult = eval(display);
        calcResult = parseFloat(calcResult.toFixed(3));
        setDisplay(calcResult);
        setShowResult(true);
      } catch (error) {
        setDisplay("error");
      }
  }else{
    setDisplay("");
  }
  }

  const handleButton = (value) => {
    setShowResult(false);
    if(value === "AC"){
      setDisplay("");
    }
    else if(value === "c"){
      setDisplay(display.slice(0,-1));
    }
    else if(isOperator(value)){
      if(display == '' || isOperator(display[display.length -1]))
        return;
      setDisplay(display + value);
    }
    else if(value === 'EQUALS'){
      calculateResult();
    }
    else if(display.length >= maxLimit){
      alert(`Maximum characters allowed : ${maxLimit}`);
    }
    else{
      setDisplay(display + value);
    }
  }

  const isOperator = (char) => {
    return ["*","/","%"].includes(char);
  }

  const operationClass = "test-2xl tracking-[2px] flex gap-[5px] items-center text-[rgba(255,255,255,0.5)] justify-end" 
  const resultClass = "text-2xl"

  return (
    <div className="min-w-[320px] bg-black flex flex-col rounded-2xl gap-4 p-4">
      <div className="overflow-x-auto bg-[#141414] min-h-24 flex items-end justify-end flex-col p-4 rounded-lg" >
        <div className={`${showResult ? resultClass : operationClass}`}>
          {display}
        </div>
      </div>
      
      <div className="grid grid-cols-[repeat(4,1fr)] gap-2">
        {keys.map((item, index) => (
          <Keys label={item} key={index} keyClass={item ==='EQUALS' && 'equals'}
          onButtonClick={handleButton}/>
        ))}
      </div>
      
    </div>
  )
}

export default TempCalculator

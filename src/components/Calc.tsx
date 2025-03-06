import { useState } from "react";
import styled from "styled-components";

const CalculatorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f5f5dc;
  padding: 2rem;
  border-radius: 8px;
`;

const CalcElement = styled.div`
    display:flex;
    flex-direction: column;
    align-items: center;
    margin: 2vh;
`;

const StyledInput = styled.input`
    background-color:#c49ed1;
    padding:1vw;
    color:white;
`;

const CalcButtons = styled.div`
    display:flex;
    flex-direction: row;
    justify-content: center;
`;

const StyledButton = styled.button`
    margin:0.5vw;
    border-radius:50%;
    padding: 1vw;
    border: 2px solid #ab82ba; /* purple! */
    transition-duration: 0.4s;

  &:hover {
    background-color: #ab82ba; 
  }
`;

const Output = styled.h3<{ isNegative: boolean }>`
  font-size: 5vw;
  color: ${(props) => (props.isNegative ? "red" : "black")};
`;


const Calculator = () => {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState("");
  const [isNegative, setIsNegative] = useState(false);

  const getNumbers = () => {
    const first = Number(num1) || 0;
    const second = Number(num2) || 0;
    return [first, second];
  };

  const displayResult = (res: number | string) => {
    setResult(res.toString());
    setIsNegative(typeof res === "number" && res < 0);
  };

  const handleAddition = () => {
    const [n1, n2] = getNumbers();
    displayResult(n1 + n2);
  };

  const handleSubtraction = () => {
    const [n1, n2] = getNumbers();
    displayResult(n1 - n2);
  };

  const handleMultiplication = () => {
    const [n1, n2] = getNumbers();
    displayResult(n1 * n2);
  };

  const handleDivision = () => {
    const [n1, n2] = getNumbers();
    if (n2 === 0) {
      displayResult("Cannot divide by zero!");
      setIsNegative(false);
    } else {
      displayResult(n1 / n2);
    }
  };

  const handlePower = () => {
    const [base, exponent] = getNumbers();
    let res = 1;
    for (let i = 0; i < exponent; i++) {
      res *= base;
    }
    displayResult(res);
  };

  const clearCalculator = () => {
    setNum1("");
    setNum2("");
    setResult("");
    setIsNegative(false);
  };

  return (
    <CalculatorContainer>
        <CalcElement>
            <StyledInput
            type="number"
            value={num1}
            onChange={(e) => setNum1(e.target.value)}
            placeholder="First Number"
            />
        </CalcElement>
        <CalcElement>
            <StyledInput
            type="number"
            value={num2}
            onChange={(e) => setNum2(e.target.value)}
            placeholder="Second Number"
            />
        </CalcElement>
        <CalcElement>
            <CalcButtons>
                <StyledButton onClick={handleAddition}>+</StyledButton>
                <StyledButton onClick={handleSubtraction}>-</StyledButton>
                <StyledButton onClick={handleMultiplication}>*</StyledButton>
                <StyledButton onClick={handleDivision}>/</StyledButton>
                <StyledButton onClick={handlePower}>**</StyledButton>
                <StyledButton onClick={clearCalculator}>Clear</StyledButton>
            </CalcButtons>
        </CalcElement>
      
        <CalcElement>
            {result !== "" && <Output isNegative={isNegative}> {result} </Output>}
        </CalcElement>
      
    </CalculatorContainer>
  );
};

export default Calculator;



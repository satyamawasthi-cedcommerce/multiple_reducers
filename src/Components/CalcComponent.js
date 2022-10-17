import React, { useState } from "react";
import { connect } from "react-redux";
import { add_num, clear, divide, multiply, sun_num } from "../Redux/action";
function CalcComponent(props) {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const addnumbers = () => {
    props.add_num(num1,num2)
  };
  const subNum = () =>{
      props.sun_num(num1,num2)
  }
  const multiplyNum = () =>{
    props.multiply(num1,num2)
  }
  const divideNum = () =>{
    props.divide(num1,num2)
  }
  const clearRes = () =>{
    props.clear();
  }
  return (
    <div>
      <input
        type="number"
        placeholder="Enter first number"
        onChange={(event) => setNum1(event.target.value)}
      />
      <input
        type="number"
        placeholder="Enter second number"
        onChange={(event) => setNum2(event.target.value)}
      />
      <div>
        <button onClick={addnumbers}>Add</button>
        <button onClick={subNum}>Substract</button>
        <button onClick={multiplyNum}>Multiply</button>
        <button onClick={divideNum}>Divide</button>
        <button onClick={clearRes}>Clear</button>
      </div>
      <div>
          Sum is {props.sum}
      </div>
      <div>
          Difference is {props.sub}
      </div>
      <div>
        Product is {props.mul}
      </div>
      <div>
        Division result is {props.div}
      </div>
    </div>
  );
}
const mapStateToProps = (state) => {
  console.log(state);
  return {
    sum: state.add.sum,
    sub:state.sub.sub,
    mul:state.mul.mul,
    div:state.div.div
  };
};
// this function is passed as second argument to connect
const mapDispatchToProps = (dispatch) => {
  return {
    add_num: (val1, val2) => dispatch(add_num(val1, val2)),
    sun_num:(val1,val2) => dispatch(sun_num(val1,val2)),
    multiply:(val1,val2) => dispatch(multiply(val1,val2)),
    divide:(val1,val2) => dispatch(divide(val1,val2)),
    clear:()=>dispatch(clear())
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(CalcComponent);

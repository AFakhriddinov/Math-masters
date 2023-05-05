/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import './Calculator.css';
import calculate from './logic/calculate';

const Calculator = () => {
  const [state, updateState] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const calculation = (e) => {
    const newState = calculate(state, e.target.textContent);
    updateState(newState);
  };

  return (
    <div className="main">
      <Operand data={state} />
      <div className="buttons">
        <div className="left-section">
          <button type="button" onClick={calculation} className="ac">
            AC
          </button>
          <button type="button" onClick={calculation} className="plusOrMinus">
            +/-
          </button>
          <button type="button" onClick={calculation} className="modelus">
            %
          </button>
          <button type="button" onClick={calculation} className="seven">
            7
          </button>
          <button type="button" onClick={calculation} className="eight">
            8
          </button>
          <button type="button" onClick={calculation} className="nine">
            9
          </button>
          <button type="button" onClick={calculation} className="four">
            4
          </button>
          <button type="button" onClick={calculation} className="five">
            5
          </button>
          <button type="button" onClick={calculation} className="six">
            6
          </button>
          <button type="button" onClick={calculation} className="1">
            1
          </button>
          <button type="button" onClick={calculation} className="two">
            2
          </button>
          <button type="button" onClick={calculation} className="three">
            3
          </button>
          <button type="button" onClick={calculation} className="zero">
            0
          </button>
          <button type="button" onClick={calculation} className="dot">
            .
          </button>
        </div>
        <div className="right-section">
          <button type="button" onClick={calculation} className="plus">
            /
          </button>
          <button type="button" onClick={calculation} className="plus">
            x
          </button>
          <button type="button" onClick={calculation} className="plus">
            -
          </button>
          <button type="button" onClick={calculation} className="plus">
            +
          </button>
          <button type="button" onClick={calculation} className="plus">
            =
          </button>
        </div>
      </div>
    </div>
  );

  function Operand(props) {
    const state = props;
    return (
      <div className="operand-input">
        <input
          type="text"
          name="operand"
          value={state.data.next || state.data.total || 0}
        />
      </div>
    );
  }
};
export default Calculator;

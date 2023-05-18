/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import '../App.css';
import calculate from './logic/calculate';

const Calculator = () => {
  const [state, updateState] = useState({
    total: null,
    operation: null,
    next: null,
  });

  const calculation = (e) => {
    const newState = calculate(state, e.target.textContent);
    updateState(newState);
  };
  const { next, total, operation } = state;
  const output = (total || '') + (operation || '') + (next || '') || '0';

  return (
    <div className="main-section">
      <h2>Lets do some Math</h2>
      <div className="main">
        <div className="operand-input" data-testid="output">
          {output}
        </div>
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
    </div>
  );
};
export default Calculator;

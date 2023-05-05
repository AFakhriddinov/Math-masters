import React from 'react';
import './Calculator.css';

const Calculator = () => (
  <>
    <div className="main">
      <Operand />
      <div className="buttons">
        <div className="left-section">
          <div className="ac">AC</div>
          <div className="plusOrMinus">+/-</div>
          <div className="modelus">%</div>
          <div className="seven">7</div>
          <div className="eight">8</div>
          <div className="nine">9</div>
          <div className="four">4</div>
          <div className="five">5</div>
          <div className="six">6</div>
          <div className="1">1</div>
          <div className="two">2</div>
          <div className="three">3</div>
          <div className="zero">0</div>
          <div className="dot">.</div>
        </div>
        <div className="right-section">
          <div className="plus">/</div>
          <div className="plus">x</div>
          <div className="plus">-</div>
          <div className="plus">+</div>
          <div className="plus">=</div>
        </div>
      </div>
    </div>
  </>
);

const Operand = () => (
  <>
    <div className="operand-input">
      <input type="text" name="operand" value="0" />
    </div>
  </>
);
export default Calculator;

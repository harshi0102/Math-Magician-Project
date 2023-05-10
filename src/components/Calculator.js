import React, { useState } from 'react';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [state, SetState] = useState({});
  const clickHandler = (e) => {
    SetState(calculate(state, e.target.textContent));
  };
  const { next, total, operation } = state;
  const display = ((total || '') + (operation || '') + (next || '')) || '0';
  return (
    <div className="wrapper" style={{ marginTop: '4rem' }}>
      <h2 style={{ marginTop: 0 }}>Let&apos;s do some math!</h2>
      <div className="calc">
        <div className="display" data-testid="display">{display}</div>
        <div className="buttons">
          <div className="row">
            <button type="button" onClick={clickHandler} className="gray btn-normal">AC</button>
            <button type="button" onClick={clickHandler} className="gray btn-normal">+/-</button>
            <button type="button" onClick={clickHandler} className="gray btn-normal">%</button>
            <button type="button" onClick={clickHandler} className="btn-normal orange first">÷</button>
          </div>
          <div className="row">
            <button type="button" onClick={clickHandler} className="gray btn-normal">7</button>
            <button type="button" onClick={clickHandler} className="gray btn-normal">8</button>
            <button type="button" onClick={clickHandler} className="gray btn-normal">9</button>
            <button type="button" onClick={clickHandler} className="btn-normal orange">x</button>
          </div>
          <div className="row">
            <button type="button" onClick={clickHandler} className="gray btn-normal">4</button>
            <button type="button" onClick={clickHandler} className="gray btn-normal">5</button>
            <button type="button" onClick={clickHandler} className="gray btn-normal">6</button>
            <button type="button" onClick={clickHandler} className="btn-normal orange">-</button>
          </div>
          <div className="row">
            <button type="button" onClick={clickHandler} className="gray btn-normal">1</button>
            <button type="button" onClick={clickHandler} className="gray btn-normal">2</button>
            <button type="button" onClick={clickHandler} className="gray btn-normal">3</button>
            <button type="button" onClick={clickHandler} className="btn-normal orange">+</button>
          </div>
          <div className="row">
            <button type="button" onClick={clickHandler} className="gray btn-normal double">0</button>
            <button type="button" onClick={clickHandler} className="gray btn-normal last">.</button>
            <button type="button" onClick={clickHandler} className="btn-normal orange last">=</button>
          </div>
        </div>
      </div>
    </div>
  );
};



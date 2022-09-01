import React from "react";
import { useState } from "react";
// <span class="material-symbols-sharp">close</span>
const Home = () => {
  return (
    <div className="Home">
      <div className="head">
        <h2 className="head__title">English Dictionary</h2>
      </div>
      <div className="input__containers">
        <div className="text__input">
          <label htmlFor="text" className="label">
            Enter a word
          </label>
          <input type="text" name="text" />
        </div>
        <div className="btn">
          <button className="submit__btn">search</button>
        </div>
      </div>
      <div className="output__containers">
        <div className="words word">
          <div className="what__word">
            <span className="word__title">Engage</span>
            <span className="partOfSpeech_phonetics">Lorem, ipsum.</span>
          </div>
          <div className="say"></div>
        </div>
        <div className="words definition">
         <span className="definition__title">Definition</span>
        </div>
      </div>

      <div className="signature_container">
        <p className="signature">Designed by Muyiwa Johnson</p>
      </div>
    </div>
  );
};

export default Home;

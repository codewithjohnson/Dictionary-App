import React from "react";

const Home = () => {
  return (
    <div className="Home">
      <div className="head">
        <h2 className="head__title">English Dictionary</h2>
      </div>

      <div className="input__container">
        <label htmlFor="input" className="label">
          Enter a word
        </label>
        <input type="text" name="input" />
        <span class="material-symbols-sharp">close</span>
      </div>

      <div className="output_container"></div>

      <div className="signature_container">
        <p className="signature">Designed by Muyiwa Johnson</p>
      </div>
    </div>
  );
};

export default Home;

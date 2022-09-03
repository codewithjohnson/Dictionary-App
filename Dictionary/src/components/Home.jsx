import React from "react";
import "../App.css";

const Home = () => {
  return (
    <div className="container">
      <div className="above">
        <h2 className="title">english dictionary</h2>
        <div className="inputs_container">
          <div className="input_box">
            <input type="text" placeholder="Search a Word" />
          </div>
          <div className="btn">
            <button className="submit_btn">Search</button>
          </div>
        </div>
      </div>
      <div className="word_container">
        <div className="word_sound">
          <span className="word_title">Power</span>
          <span className="word_play">
            <span class="material-symbols-outlined">volume_up</span>
          </span>
        </div>
        <div className="partOfSpeech_definition">
          <p className="part">Noun</p>
          <p className="definition">Lorem ipsum dolor sit amet.</p>
        </div>
      </div>

      
      <div className="below">
        <div className="footer">
          <p class="text">Designed by muyiwa johnson</p>
        </div>
      </div>
    </div>
  );
};

export default Home;

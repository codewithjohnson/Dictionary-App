import { useState } from "react";

import "./App.css";

function App() {
  return (
    <div className="App">
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
          <div className="part0fSpeech_view">
            <span className="part0fSpeech">Noun</span>
            <span className="view">/hɛˈləʊ/</span>
          </div>
          <p className="definition">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit,
            officia.
          </p>
        </div>
      </div>

      <div className="output__container">
        <div className="examples">
          <div className="examples__title">Examples</div>
          <div className="examples__content">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus,
            suscipit.
          </div>
        </div>
        <div className="synonyms">
          <div className="synonyms__title">synonyms</div>
          <div className="synonyms__content">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus,
            suscipit.
          </div>
        </div>
      </div>

      <div className="below">
        <div className="footer">
          <p class="text">Designed by muyiwa johnson</p>
        </div>
      </div>
    </div>
  );
}

export default App;

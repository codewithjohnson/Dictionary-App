import { useState, useEffect } from "react";
import "./App.css";
const initialData = {
  word: "",
  audio: "",
  partOfSpeech: "",
  phonetic: "",
  definition: "",
  example: "",
  synonyms: [],
};

function App() {
  const [input, setInput] = useState("test");
  const [data, setData] = useState(initialData);
  useEffect(() => {
    searchText(input);
  }, []);
  const HandleData = () => {
    if (input !== "") {
      const filteredText = input.toLowerCase().replace(/[^A-Z0-9]/gi, "");
      searchText(filteredText);
    }
  };
  const searchText = (text) => {
    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${text}`)
      .then((res) => res.json())
      .then((data) => {
        getSentData(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getSentData = (result) => {
    const word = result[0].word;
    const phonetic = result[0].phonetic || result[0].phonetics[1]?.text;
    const audio =
      result[0].phonetics[0].audio ||
      result[0].phonetics[1].audio ||
      result[0].phonetics[2].audio;
    const meanings = result[0].meanings;
    for (let i = 0; i < meanings.length; i++) {
      const definitions = meanings[i].definitions;
      for (let j = 0; j < definitions.length; j++) {
        if (definitions[j].example !== undefined) {
          const example = definitions[j].example;
          const definition = definitions[j].definition;
          const partOfSpeech = meanings[i].partOfSpeech;
          setData({
            ...data,
            word: word,
            partOfSpeech: partOfSpeech,
            phonetic: phonetic,
            definition: definition,
            example: example,
          });
          break;
        }
      }
    }
  };

  return (
    <div className="App">
      <div className="above">
        <h2 className="title">english dictionary</h2>
        <div className="inputs_container">
          <div className="input_box">
            <input
              type="text"
              placeholder="Search a Word"
              value={input}
              onChange={(e) => {
                setInput(e.target.value);
              }}
            />
          </div>
          <div className="btn">
            <button className="submit_btn" onClick={HandleData}>
              Search
            </button>
          </div>
        </div>
      </div>
      <div className="word_container">
        <div className="word_sound">
          <span className="word_title">{data.word}</span>
          <span className="word_play">
            <span class="material-symbols-outlined">volume_up</span>
          </span>
        </div>
        <div className="partOfSpeech_definition">
          <div className="part0fSpeech_view">
            <span className="part0fSpeech">{data.partOfSpeech}</span>
            <span className="view">{data.phonetic}</span>
          </div>
          <p className="definition">
            <span className="definition__content"> {data.definition}</span>
          </p>
        </div>
      </div>

      <div className="output__container">
        <div className="examples">
          <div className="examples__title">Example</div>
          <div className="examples__content">{data.example}</div>
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

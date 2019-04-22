import React from "react";
import Scoreboard from "./components/Scoreboard";
import Jumbotron from "./components/Jumbotron"
import CharCard from "./components/CharCard"
import characters from "./characters.json";
import "./App.css";

class App extends React.Component {

  state = {
    characters: characters,
    score: 0,
    topScore: 0,
    msg: "Click a character to begin!"
  }

  charSelect = id => {

    const sortedChars = this.state.characters.sort(() => Math.random() - 0.5);
    this.setState({
      characters: sortedChars
    });

    const selectedChar = this.state.characters.find(element => element.id === id);
    console.log(selectedChar);

    if (selectedChar.clicked) {
      var reset = this.state.characters;

      for (let i = 0; i < reset.length; i++) {
        reset[i].clicked = false;
      }

      this.setState({
        score: 0,
        characters: reset,
        msg: "Sorry, try again!"
      })
    } 
    else {
        selectedChar.clicked = true;

        if (this.state.score < 11) {
            this.setState({
              score: this.state.score + 1,
              msg: "Good guess - keep on going!"
            });

            if (this.state.score === this.state.topScore) {
              this.setState({
                topScore: this.state.topScore + 1,
              });
            }
        } else if (this.state.score === 11){

          const clear = this.state.characters.map(element => {
            return {...element, clicked: false}
           });

           this.setState({
             score: 0,
             topscore: 0,
             characters: clear,
             msg: "Congratulations, you've guessed them all correctly! Play again."
           });
        }
    }
  };

  render() {
    return (
      <React.Fragment>
        <Scoreboard
        score={this.state.score}
        topScore={this.state.topScore}
        msg={this.state.msg}>
        Clicky Game
        </Scoreboard>
        <Jumbotron />

        <p className="small-detail">Click on a character to start, but be careful not to choose the same one!</p>
        <div className="container">
          {
            this.state.characters.map((characters, index) => (
              <CharCard
              key={index}
              id={characters.id}
              image={characters.image}
              charSelect={this.charSelect}
              />
            ))
          }
        </div>

        </React.Fragment>
    );
  }
}

export default App;
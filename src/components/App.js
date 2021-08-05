import React, {Component} from 'react';
import Header from './Header';
import Player from './Player';
import AddPlayer from './AddPlayer';

class App extends Component {

    state = {
        players: [
            {
                name: "Player 1",
                score: 0,
                id: 1
            },
            {
                name: "Player 2",
                score: 0,
                id: 2
            },
            {
                name: "Player 3",
                score: 0,
                id: 3
            },
            {
                name: "Player 4",
                score: 0,
                id: 4
            }
        ]
    };

    prevPlayerID = 4;

    getHighScore = () => {
        const scores = this.state.players.map( p => p.score );
        const highScore = Math.max(...scores);
        if (highScore) {
          return highScore;
        } 
        return null;
      }

    handleScoreChange = (index, delta) => {
        this.setState( prevState => ({
            score: prevState.players[index].score += delta
        }));
    }

    handleAddPlayer = (name) => {
        this.setState(prevState => {
            return {
                players: [
                    ...prevState.players,
                    {
                        name,
                        score: 0,
                        id: this.prevPlayerID += 1
                    }
                ]
            };
        });
    }

    handleRemovePlayer = (id) => {
        this.setState( prevState => {
            return {
                players: prevState.players.filter(p => p.id !== id )
            };
        });
    }

    render() {

        const highScore = this.getHighScore();

        return (
            
            <div className="scoreboard">
                <Header players={this.state.players}/>

                {this.state.players.map( (player, index) =>
                    <Player 
                        name={player.name}
                        score={player.score}
                        id={player.id}
                        score={player.score}
                        key={player.id.toString()}
                        index={index}
                        changeScore={this.handleScoreChange}
                        removePlayer={this.handleRemovePlayer}
                        isHighScore={highScore === player.score}
                    />
                )}

                <AddPlayer AddPlayer={this.handleAddPlayer}/>
            </div>
        );
    } 
}


export default App;
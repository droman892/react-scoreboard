import React, {Component} from 'react';
import Header from './Header';
import Player from './Player';

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
            },
            {
                name: "Player 5",
                score: 0,
                id: 5
            }
        ]
    };

    handleScoreChange = (index, delta) => {
        this.setState( prevState => ({
            score: prevState.players[index].score += delta
        }));
    }

    handleRemovePlayer = (id) => {
        this.setState( prevState => {
            return {
                players: prevState.players.filter(p => p.id !== id )
            };
        });
    }

    render() {
        return (
            <div className="scoreboard">
                <Header 
                    title="Scoreboard" 
                    totalPlayers={this.state.players.length} 
                />

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
                    />
                )}
            </div>
        );
    } 
}


export default App;
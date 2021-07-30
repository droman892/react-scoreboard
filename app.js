const Header = (props) => {
    return (
        <header>
            <h1>{ props.title} </h1>
            <span className="stats">Players: {props.totalPlayers} </span>
        </header>
    );
}

const Player = (props) => {
    return (
        <div className="player">
            <span className="player-name">
                <button className="remove-player" onClick={ () => props.removePlayer(props.id) }>✖</button>
                {props.name}
            </span>

            <Counter />

        </div>
    );
}

class Counter extends React.Component {
    
    state = {
        score: 0
    };
    
    raiseScore = () => {
        this.setState( prevState => ({
            score: prevState.score + 1
        }));
    }


    lowerScore = () => {
        this.setState( prevState => ({
            score: prevState.score - 1
        }));
    }

    render() {
        return (
        <div className="counter">
            <button className="counter-action decrement" onClick={this.lowerScore}> - </button>
            <span className="counter-score">{this.state.score}</span>
            <button className="counter-action increment" onClick={this.raiseScore}> + </button>
        </div>
        );
    }
}

class App extends React.Component {

    state = {
        players: [
            {
                name: "Matthew",
                id: 1
            },
            {
                name: "Mark",
                id: 2
            },
            {
                name: "Luke",
                id: 3
            },
            {
                name: "John",
                id: 4
            }
        ]
    };

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

                {this.state.players.map( player =>
                    <Player 
                        name={player.name}
                        id={player.id}
                        score={player.score}
                        key={player.id.toString()}
                        removePlayer={this.handleRemovePlayer}
                    />
                )}
            </div>
        );
    } 
}


ReactDOM.render(
    <App />,
    document.getElementById('root')
);
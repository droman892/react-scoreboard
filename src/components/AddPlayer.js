import React, {Component} from 'react';
import PropTypes from 'prop-types';

class AddPlayer extends Component {
    
    static propTypes = {
        addPlayer: PropTypes.func
      };

    state = {
        value: ''
    };

    playerInput = React.createRef();

    handleValueChange = (e) => {
        this.setState({value: e.target.value});
    }
    
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.AddPlayer(this.playerInput.current.value);
        e.currentTarget.reset();
    }

    render() {
        console.log(this.state.value)
        return (
            <form onSubmit={this.handleSubmit}>
                <input
                    type="text"
                    ref={this.playerInput}
                    placeholder="Enter a player's name..."
                />
                    
                <input
                   type="submit"
                   value="Add Player" 
                />
            </form>
        );
    }
}

export default AddPlayer;
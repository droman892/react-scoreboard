import React, {Component} from 'react';

class AddPlayer extends Component {
    render() {
        return (
            <form>
                <input
                    type="text"
                    placeholder="Enter a player's name"
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
import React from 'react';
import Board from './Board.jsx'
class App extends React.Component {
    constructor(props) {
        super(props)
    }
   
    render() {
        return ( 
            <div>
                <Board/>

            </div>
        )
    }

}

export default App;
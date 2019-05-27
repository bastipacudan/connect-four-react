import React from 'react';

class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cnt: 0,
            board: [
                [0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0]
            ]
        }
    }
    onCellClick(e) {
        console.log(e.target.getAttribute("row ") + " this is ");

        var col = e.target.getAttribute("col");
        for (var row = 5; row >= 0; row--) {
            if (this.state.board[row][col] === 0) {
                if (this.state.cnt % 2 == 0) {
                    document.getElementById(row + "" + col).style.backgroundColor = "yellow";
                    this.state.board[row][col] = 1;
                } else {
                    document.getElementById(row + "" + col).style.backgroundColor = "red";
                    this.state.board[row][col] = 2;
                }
                this.checkVertical(col);
                this.checkRow(row);
                this.checkDiagonal();
                console.log(this.state.board)
                this.setState({ cnt: this.state.cnt + 1 });
                return;
            }
            this.setState({ cnt: this.state.cnt + 1 });
        }



    }

    checkVertical(col) {
        var red = 0;
        var yellow = 0;
        for (var row = 0; row < 6; row++) {
            if (this.state.board[row][col] === 1) {
                yellow += 1;
                if (yellow == 4)
                    alert('Yellow Winner Vertical');
            } else if (this.state.board[row][col] === 2) {
                red += 1;
                if (red == 4)
                    alert('red Winner Vertical');
            }
        }

    }

    checkRow(row) {
        console.log('this is row: ', row)
        var red = 0;
        var yellow = 0;
        for (var col = 0; col < 7; col++) {
            if (this.state.board[row][col] === 1) {
                yellow += 1;
                if (yellow == 4)
                    alert('Yellow Winner');
            } else if (this.state.board[row][col] === 2) {
                red += 1;
                if (red == 4)
                    alert('red Winner');
            }
        }
    }

    checkDiagonal() {
        var row = 0;

        var red = 0;
        var yellow = 0;
        for (var idx = 3; idx < 6; idx++) {
            for (var col = idx; col >= 0; col--) {
                if (this.state.board[row][col] === 1) {
                    yellow += 1;
                    if (yellow == 4)
                        alert('Yellow Winner Diagonal');
                } else if (this.state.board[row][col] === 2) {
                    red += 1;
                    if (red == 4)
                        alert('red Winner Diagonal');
                }
                row++;
            }
            red = 0;
            yellow = 0;
            row = 0;
        }
        row = 1;
        for (var idx = 3; idx < 6; idx++) {
            for (var col = idx; col >= 0; col--) {
                
                if (this.state.board[row][col] === 1) {
                    yellow += 1;
                    if (yellow == 4)
                        alert('Yellow Winner Diagonal');
                } else if (this.state.board[row][col] === 2) {
                    red += 1;
                    if (red == 4)
                        alert('red Winner Diagonal');
                }
                row++;
            }
            red = 0;
            yellow = 0;
            row = 1;
        }






    }



    render() {
        var squares = [];
        for (var x = 0; x < 6; x++) {
            for (var y = 0; y < 7; y++) {
                squares.push(<div className="cell" col={y} onClick={(e) => this.onCellClick(e)} > <span row={x} col={y} id={x + "" + y} className="dot"></span></div>)
            }
        }
        /// console.log(squares);
        return (
            <div className="grid">
                {squares}
            </div>
        )
    }
}

export default Board;
'use strict';

class TicTacToe extends React.Component {
  constructor(props) {
    super(props);
    this.state ={
      0: '',
      1: '',
      2: '',
      3: '',
      4: '',
      5: '',
      6: '',
      7: '',
      8: '',
    playerTurn : 'X',
    won: 'none'
    };
  }

  clickCell = (e) => {
    const obj = {};
    obj[e.target.getAttribute('data-cell')] = this.state.playerTurn;
    obj['playerTurn'] = this.state.playerTurn ==='X'? 'O': 'X';
    this.setState(obj);
    //
    // this.setState({
    //   playerTurn: this.state.playerTurn === 'X'?'O':'X'
    // })
  }

  render() {
    return (
      <div>
        <div className="row">
          <div data-cell="0" onClick={this.clickCell}>{this.state[0]}</div>
          <div data-cell="1" onClick={this.clickCell}>{this.state[1]}</div>
          <div data-cell="2" onClick={this.clickCell}>{this.state[2]}</div>
        </div>
        <div className="row">
          <div data-cell="3" onClick={this.clickCell}>{this.state[3]}</div>
          <div data-cell="4" onClick={this.clickCell}>{this.state[4]}</div>
          <div data-cell="5" onClick={this.clickCell}>{this.state[5]}</div>
        </div>
        <div className="row">
          <div data-cell="6" onClick={this.clickCell}>{this.state[6]}</div>
          <div data-cell="7" onClick={this.clickCell}>{this.state[7]}</div>
          <div data-cell="8" onClick={this.clickCell}>{this.state[8]}</div>
        </div>
      </div>
    );
  };
}

ReactDOM.render(<TicTacToe />, document.getElementById('tic-tac-toe'));

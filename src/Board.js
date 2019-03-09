import React , {Component}from 'react';
import BoardSquare from './BoardSquare';
import Knight from './Knight';

import { moveKnight } from './Game.js';
import { DragDropContextProvider } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';


function renderSquare(i, knightPosition) {
  const x = i % 8;
  const y = Math.floor(i / 8);
  return (
    <div key={i}
         style={{ width: '12.5%', height: '12.5%' }}>
      <BoardSquare x={x}
                   y={y}>
        {renderPiece(x, y, knightPosition)}
      </BoardSquare>
    </div>
  );
}

function renderPiece(x, y, [knightX, knightY]) {
    if (x === knightX && y === knightY) {
    return null;
  }
}



export default class  Board extends Component{

  constructor(props){
    super(props);
  }


  handleSquareClick(toX, toY){
    moveKnight(toX,toY);
  }

  render(){
      const squares = [];
      for(let i = 0; i < 64; i++){
        squares.push(renderSquare(i, this.props.knightPosition));
      }
      return (
        <DragDropContextProvider backend={HTML5Backend}>
          <div style={{
            width: '100%',
            height: '100%',
            display: 'flex',
            flexWrap: 'wrap',
          }}>
            {squares}
          </div>
        </DragDropContextProvider>
      );
    }
}




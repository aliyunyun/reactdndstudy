

let knightPosition = [0, 0];
let observer = null;

function emitChange() {
  observer(knightPosition);
}

export function observe(receive){

  if(observer){
    throw new Error('Multiple observers not implemented.')
  }
  observer = receive;
  emitChange();
}

export function moveKnight(toX, toY) {
  knightPosition = [toX, toY];
  emitChange();
}
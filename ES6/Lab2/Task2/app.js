function* genByNum(num) {
  let x = 0;
  let y = 1;
  yield 0;
  yield 1;
  for (let i = 0; i < num - 1; i++) {
    let temp = x + y;
    yield x + y;
    x = y;
    y = temp;
  }
}

function* genByMax(max) {
    let x = 0;
    let y = 1;
    yield 0;
    yield 1;
    let temp =0;
    while (true) {
        temp = x + y;
        if(temp > max){
            break;
        }
      yield x + y;
      x = y;
      y = temp;
    }
  }

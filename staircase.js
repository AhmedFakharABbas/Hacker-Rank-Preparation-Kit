function staircase(n) {
  for (let i = 0; i < n; i++) {
    let arr = [];
    for (let z = 0; z < n; z++) {
      arr.push(' ');
    }
    for (let j = 0; j <= i; j++) {
    //   console.log(arr);

      //   console.log('i ', i);
      //   console.log('j ', j);
      //   console.log('n ', n);

      arr.push('*');
      //   console.log(arr);
      //   console.log('----------------');
    }
    console.log(arr.join(''));
  }
}
staircase(3);

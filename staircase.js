function staircase(n) {
  for (let i = 0; i < n; i++) {
    for (let i = 1; i <= n; i++) {
      let line = '';

      // Add spaces
      for (let j = 0; j < n - i; j++) {
        line += ' ';
      }

      // Add stars
      for (let k = 0; k < i; k++) {
        line += '*';
      }

      console.log(line);
    }
  }
}
staircase(3);

function Fibb(n) {
  let a = 0,
    b = 1,
    temp;
  for (let i = 1; i <= n; i++) {
    console.log(a);
    temp = a + b;
    a = b;
    b = temp;
  }
}
Fibb(4);

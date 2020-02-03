const eat = (a) => {
  if (Math.floor((a / 1) % 10) == 1) {
    let c = a + " повар";
    console.log(c);
  }
  if (Math.floor((a / 1) % 10) <= 4 && Math.floor((a / 1) % 10) !== 1) {
    c = a + " поварa";
    console.log(c);
  }
  if (Math.floor((a / 1) % 10) >= 5 && Math.floor((a / 1) % 10) == 0) {
    c = a + " поваров";
    console.log(c);
  }
};

eat();

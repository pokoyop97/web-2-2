Promise.resolve(123)
  .then(res => {
    console.log(res);
    return 456;
  })
  .then(res => {
    console.log(res);
    return Promise.resolve(123);
  })
  .then(res => {
    console.log(res);
    return Promise.resolve(123);
  })
  .catch(err => {
    console.log(err.message);
  });

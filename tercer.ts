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
Promise.reject(new Error("queapasado como dice el auronplay"))
  .then(res => {
    console.log(res); 
    return 456;
  })
  .catch(err => {
    console.log(err.message);
    return Promise.resolve(123);
  })
  .then(res => {
    console.log(res);
  });

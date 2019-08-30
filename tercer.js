Promise.resolve(123)
    .then(function (res) {
    console.log(res);
    return 456;
})
    .then(function (res) {
    console.log(res);
    return Promise.resolve(123);
})
    .then(function (res) {
    console.log(res);
    return Promise.resolve(123);
})["catch"](function (err) {
    console.log(err.message);
});
Promise.reject(new Error("queapasado como dice el auronplay"))
    .then(function (res) {
    console.log(res);
    return 456;
})["catch"](function (err) {
    console.log(err.message);
    return Promise.resolve(123);
})
    .then(function (res) {
    console.log(res);
});

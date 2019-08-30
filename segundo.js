var promise = new Promise(function (resolve, reject) {
    resolve(123);
});
promise.then(function (res) {
    console.log("Soy llamado:", res === 123);
});
promise["catch"](function (err) { });

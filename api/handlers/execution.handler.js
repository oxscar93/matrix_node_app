exports.execute = function(funct, next, res) {
    funct().then(result => {
      res.send(result);
    })
    .catch(error =>{
        next(new Error(error))
    });
};

exports.executeNoPromise = function(funct, next, res) {
      res.send(funct());
};
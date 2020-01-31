var execHandler = require('../handlers/execution.handler');
var matrixService = require('../services/matrix.service');

exports.diagonalDifference = function(req, res, next) {
  execHandler.executeNoPromise(() => 
  { return {result: matrixService.diagonalDifference(req.body.matrix, req.body.length)}}, next, res);
};

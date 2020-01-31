module.exports = function(app) {

    // matrixController
    var matrixController = require('../controllers/matrix.controller');
  
    app.route('/diagonal-difference')
      .post(matrixController.diagonalDifference)
};
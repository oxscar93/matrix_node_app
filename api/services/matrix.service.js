'use strict';

exports.diagonalDifference = function(matrix, length) {
  var firstDiagonal = []
  var secondDiagonal = []

  for (var i = 0; i < length; i++)
  {
      var row = matrix[i];

      firstDiagonal.push(row[i]);
      secondDiagonal.push(row[(length - i) - 1]);           
  } 
   
  return Math.abs((firstDiagonal.reduce((sum, current) => sum + current, 0 )) - (secondDiagonal.reduce((sum, current) => sum + current, 0 ))); 
};


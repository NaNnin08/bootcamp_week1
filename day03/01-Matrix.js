let arr = [[4, 5, 6], [6, 10, 8], [9, 10, 12]];

function printMatrix(matrix) {
    let out = "";
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix.length; j++) {
            out += matrix[i][j] + " ";
        }
        out += "\n";
    }
    return out;
}

console.log(printMatrix(arr));

function searchMatrix(matrix, k) {
    let out;
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix.length; j++) {
            if (matrix[i][j] === k) {
                out = matrix[i][j];
            }
        }
    }
    return out;
}

console.log(searchMatrix(arr, 10))
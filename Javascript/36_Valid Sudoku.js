/*
36. Valid Sudoku
Medium
Topics
Companies
Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:

Each row must contain the digits 1-9 without repetition.
Each column must contain the digits 1-9 without repetition.
Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.
Note:

A Sudoku board (partially filled) could be valid but is not necessarily solvable.
Only the filled cells need to be validated according to the mentioned rules.

url: https://leetcode.com/problems/valid-sudoku/description/
*/


/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    
    // check row
    for(let i = 0; i < 9; i++) {
        let row = new Set();
        for(let j = 0; j < 9; j++) {
            if(board[i][j] === '.') continue;
            if(row.has(board[i][j])) return false;
            row.add(board[i][j]);
        }
    }

    // check column
    for(let j=0; j < 9; j++) {
        let column = new Set();
        for(let i = 0; i < 9; i++) {
            if(board[i][j] === '.') continue;
            if(column.has(board[i][j])) return false;
            column.add(board[i][j]);
        }
    }

    // check sub-box
    for(let i = 0; i < 9; i+=3) {
        for(let j = 0; j < 9; j+=3) {
            let subBox = new Set();
            for(let m = i; m < i+3; m++) {
                for(let n = j; n < j+3; n++) {
                    if(board[m][n] === '.') continue;
                    if(subBox.has(board[m][n])) return false;
                    subBox.add(board[m][n]);
                }
            }
        }
    }
    return true;
};

// Fixed 上述可以合併且 run for loop i*j 一次, 改變 i,j 順序就好

/*
// Ref 1st
var isValidSudoku = function(board) {
    const n = board.length;
    const seen = new Set();
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (board[i][j] !== ".") {
                const row = "r" + i + board[i][j];
                const col = "c" + j + board[i][j];
                const block = "b" + (3 * Math.floor(i / 3) + Math.floor(j / 3)) + board[i][j];
                if (seen.has(row) || seen.has(col) || seen.has(block)) return false;
                seen.add(row);
                seen.add(col);
                seen.add(block);
            }
        }
    }
    return true;
};
 */
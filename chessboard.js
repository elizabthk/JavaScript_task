//
var chessboard = "";
for (var x = 1; x <= 8; x+=1) {
    for (var y = 1; y<=8; y+=1) {
        if ((x+y) % 2 == 0) {
           chessboard += " ";
        } else {
            chessboard += "#";
        }
    }
    chessboard += "\n"
}
console.log(chessboard);
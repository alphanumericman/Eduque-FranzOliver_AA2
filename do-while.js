document.writeln("<h1>Loop 1 (while):</h1>");
let yval = 2;
do {
    yval = yval + 2;
    document.writeln(yval);
    if (yval < 50) {
        document.writeln(",");
    }
} while (yval < 50)
document.writeln("<br>");
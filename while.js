document.writeln("<h1>Loop 1 (while):</h1>");
let xval = 1;
while (xval<51) {
    xval = xval + 2;
    document.writeln(xval);
    if (xval < 51) {
        document.writeln(",");
    }
}
document.writeln("<br>");
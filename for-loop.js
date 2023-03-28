document.writeln("<h1>Loop 1 (while):</h1>");
let zval = 1;
for (let c=1; zval<4000; c++) {
    zval = ((2*c)+(2**c)-2)/2;
    document.writeln(zval);
    if (zval < 4108) {
       document.writeln(",");
    }
}
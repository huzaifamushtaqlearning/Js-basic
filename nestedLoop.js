for (let i = 1; i <= 10; i++) { // Outer loop (for rows)
    for (let j = 1; j <= 10; j++) { // Inner loop (for columns)
        document.write(i * j + "\t"); // Multiplying i and j, and displaying the result
    }
    document.write("<br>"); // New line after each row
}


// tabular k liau
document.write("<table border='1'>"); // Table start with border

for (let i = 1; i <= 10; i++) {  // Outer loop for rows
    document.write("<tr>");  // Start of a new row
    
    for (let j = 1; j <= 10; j++) {  // Inner loop for columns
        document.write("<td>" + (i * j) + "</td>");  // Multiplication result inside a table cell
    }
    
    document.write("</tr>");  // End of the row
}

document.write("</table>");  // Table end



/// payramid
let rows = 5; // Number of rows for the pyramid

for (let i = 1; i <= rows; i++) {  // Outer loop for each row
    // Print leading spaces
    for (let j = 1; j <= rows - i; j++) {
        document.write("&nbsp;&nbsp;");  // Space for centering the stars
    }
    
    // Print stars for the pyramid
    for (let k = 1; k <= (2 * i - 1); k++) {
        document.write("*");  // Star for pyramid shape
    }
    
    document.write("<br>");  // Move to the next row
}


////ik paytern jo 1
                //22
for(var a = 1; a <= 5; a++){
    for(var b = 1; b <= a; b++){
        document.write(a);
    }
    document.write("<br>");
}
//
// 1
// 12
// 123
// 1234
// 12345

for(var a = 1; a <= 5; a++){
    for(var b = 1; b <= a; b++){
        document.write(b);
    }
    document.write("<br>");
}



////5 4 3 2 1
//  4 3 2 1
//  3 2 1
//  2 1
//  1

for(var a = 5; a >= 1; a--){
    for(var b = a; b >= 1; b--){
        document.write(b);
    }
    document.write("<br>");
}



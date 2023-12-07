// --- Question 01 --- //
function fn1() {
    var input = Number(document.getElementById("frist-input").value);
    console.log(input);
    document.getElementById("output").innerHTML = input
}

// --- Question 02 --- //

function fn2() {
    var input2 = Number(document.getElementById("user-input").value);
    if (input2 % 3 === 0 && input2 % 4 === 0) {
        console.log("yes");
        document.getElementById("output2").innerHTML = "yes"
    } else {
        console.log("no");
        document.getElementById("output2").innerHTML = "no"
    }
}

// --- Question 03 --- //

function fn3() {
    var input3 = Number(document.getElementById("user3-input").value);
    var input4 = Number(document.getElementById("user4-input").value);


    if (input3 > input4) {
        console.log(input3);
        document.getElementById("output3").innerHTML = input3
    } else if (input4 > input3) {
        console.log(input4);
        document.getElementById("output3").innerHTML = input4
    }
}

// --- Question 04 --- //

function fn4() {
    var input5 = Number(document.getElementById("user5-input").value);
    if (input5 > 0) {
        console.log("positive");
        document.getElementById("output4").innerHTML = "positive"
    } else if (input5 < 0) {
        console.log("negative");
        document.getElementById("output4").innerHTML = "negative"
    }
}


// --- Question 05 --- //

function fn5() {
    var input6 = Number(document.getElementById("user6-input").value);
    var input7 = Number(document.getElementById("user7-input").value);
    var input8 = Number(document.getElementById("user8-input").value);
    if (input6 > input7 && input6 > input8) {
        console.log(input6);
        document.getElementById("output5").innerHTML = input6
    } else if (input7 > input6 && input7 > input8) {
        console.log(input7);
        document.getElementById("output5").innerHTML = input7
    } else if (input8 > input6 && input8 > input7) {
        console.log(input8);
        document.getElementById("output5").innerHTML = input8
    }
    if (input6 < input7 && input6 < input8) {
        console.log(input6);
        document.getElementById("output6").innerHTML = input6
    } else if (input7 < input6 && input7 < input8) {
        console.log(input7);
        document.getElementById("output6").innerHTML = input7
    } else if (input8 < input6 && input8 < input7) {
        console.log(input8);
        document.getElementById("output6").innerHTML = input8
    }
}

// --- Question 06 --- //


function fn6() {
    var input9 = Number(document.getElementById("user9-input").value);
    if (input9 % 2 == 0) {
        console.log("even");
        document.getElementById("output7").innerHTML = "even"
    } else if (input9 % 2 == 1) {
        console.log("odd");
        document.getElementById("output7").innerHTML = "odd"
    }
}

// --- Question 07 --- //

function fn7() {
    var input10 = document.getElementById("user10-input").value
    if (input10 === "a" || input10 === "e" || input10 === "i" || input10 === "o" || input10 === "u") {
        console.log("vowel");
        document.getElementById("output8").innerHTML = "vowel"
    } else {
        console.log("consonant");
        document.getElementById("output8").innerHTML = "consonant"
    }
}

// --- Question 08 --- //

function fn8() {
    var input11 = Number(document.getElementById("user11-input").value)
    cartona = " "
    for (var i = 1; i <= input11; i++) {
        cartona += ' ' + i + ' ';
        document.getElementById("output9").innerHTML = cartona;
    }
}


// --- Question 09 --- //

function fn9() {
    var input12 = Number(document.getElementById("user12-input").value)
    multiply = Number(input12 * 12)
    cartona = " "
    for (var i = 1; (i * input12) <= multiply; i++) {
        cartona += (i * input12) + ' ';
        document.getElementById("output10").innerHTML = cartona;
    }
}

// --- Question 10 --- //

function fn10() {
    var input13 = Number(document.getElementById("user13-input").value)
    cartona = " "
    for (var i = 1; (i * 2) <= input13; i++) {
        cartona += (i * 2) + ' ';
        document.getElementById("output11").innerHTML = cartona;
    }
}

// --- Question 11 --- //


function fn11() {
    var input14 = Number(document.getElementById("user14-input").value);
    var input15 = Number(document.getElementById("user15-input").value);

    power = input14 ** input15
    document.getElementById("output12").innerHTML = power

}

// --- Question 12 --- //


function fn12() {
    var input16 = Number(document.getElementById("user16-input").value);
    var input17 = Number(document.getElementById("user17-input").value);
    var input18 = Number(document.getElementById("user18-input").value);
    var input19 = Number(document.getElementById("user19-input").value);
    var input20 = Number(document.getElementById("user20-input").value);

    total = input16 + input17 + input18 + input19 + input20
    average = total / 5
    percentage = total / 500 * 100

    document.getElementById('output13').innerHTML = total;
    document.getElementById('output14').innerHTML = average;
    document.getElementById('output15').innerHTML = percentage + ' %';

}

// --- Question 13 --- //


function fn13() {
    var input21 = Number(document.getElementById("user21-input").value);
    if (input21 == 2) {
        document.getElementById("output16").innerHTML = "28 days"
    } else if (input21 == 4 || input21 == 6 || input21 == 9 || input21 == 11) {
        document.getElementById("output16").innerHTML = "30 days"
    } else {
        document.getElementById("output16").innerHTML = "31 days"

    }
}


// --- Question 14 --- // 


function fn14() {
    var input22 = Number(document.getElementById("user22-input").value);
    var input23 = Number(document.getElementById("user23-input").value);
    var input24 = Number(document.getElementById("user24-input").value);
    var input25 = Number(document.getElementById("user25-input").value);
    var input26 = Number(document.getElementById("user26-input").value);

    total = input22 + input23 + input24 + input25 + input26
    percentage = total / 500 * 100

    if (percentage >= 90) {
        document.getElementById('output17').innerHTML = percentage + "%"
        document.getElementById('output18').innerHTML = "grade A";
    } else if (percentage >= 80) {
        document.getElementById('output17').innerHTML = percentage + "%"
        document.getElementById('output18').innerHTML = "grade B";
    } else if (percentage >= 70) {
        document.getElementById('output17').innerHTML = percentage + "%"
        document.getElementById('output18').innerHTML = "grade C";
    } else if (percentage >= 60) {
        document.getElementById('output17').innerHTML = percentage + "%"
        document.getElementById('output18').innerHTML = "grade D";
    } else if (percentage >= 40) {
        document.getElementById('output17').innerHTML = percentage + "%"
        document.getElementById('output18').innerHTML = "grade E";
    } else {
        document.getElementById('output17').innerHTML = percentage + "%"
        document.getElementById('output18').innerHTML = "grade F";
    }

}


// --- Question 15 --- //

function fn15() {
    var input27 = document.getElementById("user27-input").value.toLowerCase();
    switch (input27) {
        case "February":
        case "2":
            document.getElementById("output19").innerHTML = "28 days"
            break;
        case "April":
        case "4":
        case "June":
        case "6":
        case "September":
        case "9":
        case "November":
        case "11":
            document.getElementById("output19").innerHTML = "30 days"
            break;
        default:
            document.getElementById("output19").innerHTML = "31 days"
            break;
    }
}


// --- Question 16 --- //


function fn16() {
    var input28 = document.getElementById("user28-input").value.toLowerCase();
    switch (input28) {
        case "a":
        case "e":
        case "i":
        case "o":
        case "u":
            document.getElementById("output20").innerHTML = "vowel"
            break;
        default:
            document.getElementById("output20").innerHTML = "consonant"
            break;
    }
}

// --- Question 17 --- //

function fn17() {
    var input29 = Number(document.getElementById("user29-input").value);
    var input30 = Number(document.getElementById("user30-input").value);
    maximum = input29 > input30
    switch (maximum) {
        case true:
            document.getElementById("output21").innerHTML = input29
            break;
        default:
            document.getElementById("output21").innerHTML = input30
            break;
    }




}

// --- Question 18 --- //

function fn18() {
    var input31 = Number(document.getElementById("user31-input").value);
    switch (input31 % 2 == 0) {
        case true:
            document.getElementById("output22").innerHTML = "even"
            break;
        default:
            document.getElementById("output22").innerHTML = "odd"
            break;
    }
}


// --- Question 19 --- //

function fn19() {
    var input32 = Number(document.getElementById("user32-input").value);
    switch (input32) {
        case 0:
            document.getElementById("output23").innerHTML = "zreo"
            break;
        default:
            switch (input32 > 0) {
                case true:
                    document.getElementById("output23").innerHTML = "positive"
                    break;
                default:
                    document.getElementById("output23").innerHTML = "negative"
                    break;
            }
    }
}


// --- Question 20 --- //

function fn20() {
    var input33 = Number(document.getElementById("user33-input").value);
    var input34 = document.getElementById("user34-input").value;
    var input35 = Number(document.getElementById("user35-input").value);
    sign = input34
    switch (sign) {
        case "+":
            document.getElementById("output24").innerHTML = input33  + input35
            break;
            case "-":
            document.getElementById("output24").innerHTML = input33  - input35
            break;
            case "*":
            document.getElementById("output24").innerHTML = input33  * input35
            break;
            case "/":
            document.getElementById("output24").innerHTML = input33  / input35
            break;
        default:
            document.getElementById("output24").innerHTML = "you can enter only ( + , - , * , /  )"
            break;
    }




}

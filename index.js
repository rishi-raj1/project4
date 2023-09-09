const display = document.getElementsByClassName("display")[0];
const buttons = document.getElementsByTagName("button");
let input = "";



for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', (e) => helper(e));
}

function helper(e) {
    const val = e.target.value;


    if (val === "reset") {
        resetFunction();
    }
    else if (val === "del") {

        if (input.length) {
            input = input.slice(0, -1);
        }

    }
    else if (val === "equal") {
        calculate();
    }
    else {
        if (input.length == 0) {
            if (val >= '0' && val <= '9') {
                input += val;
            }
        }
        else {
            const len = input.length;

            if (input[len - 1] >= '0' && input[len - 1] <= '9') {
                input += val;
            }
            else {
                if (val >= '0' && val <= '9') {
                    input += val;
                }
            }
        }

    }

    display.innerText = input;

}

function resetFunction() {
    input = "";
}

function calculate() {
    const len = input.length;

    if (input[len - 1] >= '0' && input[len - 1] <= '9') {

        let ind = 0;
        let num1 = "", num2 = "";
        let char = "";

        while (ind < len) {
            if (input[ind] == '+' || input[ind] == '-' || input[ind] == '*' || input[ind] == '/') {
                if (char.length == 0) {
                    char = input[ind];
                }
                else {
                    num1 = solve(num1, num2, char);
                    num2 = "";
                    char = input[ind];
                }
            }
            else {
                if (char.length == 0) {
                    num1 += input[ind];
                }
                else {
                    num2 += input[ind];
                }
            }

            ind++;
        }

        if (char.length == 0) {
            input = num1;
        }
        else {
            input = solve(num1, num2, char);
        }
    }

}

function solve(num1, num2, char) {
    num1 = Number(num1);
    num2 = Number(num2);

    let res = 0;

    if (char == '*') {
        res = num1 * num2;
    }
    else if (char == '/') {
        res = num1 / num2;
    }
    else if (char == '+') {
        res = num1 + num2;
    }
    else if (char == '-') {
        res = num1 - num2;
    }

    res = res.toString();


    return res;
}
var bD = document.getElementsByClassName("blackDiv")[0];
var gD = document.getElementsByClassName("greyDiv")[0];

var btns = document.getElementsByTagName("button");

var div = document.getElementsByClassName("butDivision")[0];
var mul = document.getElementsByClassName("butMulti")[0];
var min = document.getElementsByClassName("butMinus")[0];
var plu = document.getElementsByClassName("butPlus")[0];

var equ = document.getElementsByClassName("butEqual")[0];
var del = document.getElementsByClassName("butDelete")[0];
var poi = document.getElementsByClassName("butPoint")[0];
var cle = document.getElementsByClassName("butClear")[0];

var string="";
var stack = [];

for (var i = 0; i < btns.length; i++) {
    btns[i].onclick = function() {
        string += this.innerText;
        bD.innerText = string;
    }
}

div.onclick = function(){
    if (string == ""){
        var lastElem = stack.pop();
        stack.push(lastElem == undefined ? "0" : lastElem);
        lastElem = stack.pop();
        if(!isOperation(lastElem)){
            stack.push(lastElem);
        }
    }
    else{
        stack.push(string);
    }
    stack.push(this.innerText);
    string = "";
    gD.innerText = stackToString();
    console.log(gD.innerText);
}

mul.onclick = function(){
    if (string == ""){
        var lastElem = stack.pop();
        stack.push(lastElem == undefined ? "0" : lastElem);
        lastElem = stack.pop();
        if(!isOperation(lastElem)){
            stack.push("*");
        }
    }
    else{
        stack.push(string);
    }
    stack.push("*");
    string = "";
    bD.innerText = "";
    gD.innerText = stackToString();
}

min.onclick = function(){
    if (string == ""){
        var lastElem = stack.pop();
        stack.push(lastElem == undefined ? "0" : lastElem);
        lastElem = stack.pop();
        if(!isOperation(lastElem)){
            stack.push("-");
        }
    }
    else{
        stack.push(string);
    }
    stack.push("-");
    string = "";
    bD.innerText = "";
    gD.innerText = stackToString();
}

plu.onclick = function(){
    if (string == ""){
        var lastElem = stack.pop();
        stack.push(lastElem == undefined ? "0" : lastElem);
        lastElem = stack.pop();
        if(!isOperation(lastElem)){
            stack.push("+");
        }
    }
    else{
        stack.push(string);
    }
    stack.push("+");
    string = "";
    bD.innerText = "";
    gD.innerText = stackToString();
}

del.onclick = function(){
    string = string.slice(0, -1);
    bD.innerText = string;
}

cle.onclick = function(){
    stack = [];
    string = "";
    bD.innerText = "";
    gD.innerText = "";
}

poi.onclick = function(){
    if(!string.includes('.')){
        string += '.';
        bD.innerText = string;
    }
}

function stackToString(){
    var str = stack.toString();
    //console.log(str);
    while(str.includes(',')){
        str = str.replace(',',' ');
    }
    return str;
}

function isOperation(elem) {
    return (elem == "+" || elem == "-" || elem == "*" || elem == "/")
}

equ.onclick = function(){
    stack.push(string);
    string = eval(stackToString());
    if (string != undefined)
        string.toString();
    stack = [];
    gD.innerText = "";
    bD.innerText = string;
    string = "";
}
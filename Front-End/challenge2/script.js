let show = document.getElementById('display');

let valueS = show.textContent;
let result = 0;
let tmpNumL = 0;
let tmpNumR = 0;
let tmpsigno  = "";
let operacionTrinaria = false;
let btn0 = document.getElementById('zero');
let btn1 = document.getElementById('one');
let btn2 = document.getElementById('two');
let btn3 = document.getElementById('three');
let btn4 = document.getElementById('four');
let btn5 = document.getElementById('five');
let btn6 = document.getElementById('six');
let btn7 = document.getElementById('seven');
let btn8 = document.getElementById('eight');
let btn9 = document.getElementById('nine');

let btndivision = document.getElementById('division');
let btnmulti = document.getElementById('multiplication');
let btnsubtrack = document.getElementById('subtrack');
let btnadd = document.getElementById('add');
let btnequals = document.getElementById('equals');

function ejecutarbtn(btn , accion){
    let valuebtn = btn.textContent;
    console.log(valuebtn);
    btn.addEventListener('click', function () {
        accion(valuebtn);
    });
}
function operacion(num1,op,num2){
    if( op == '+')  return num1 + num2;
    else if( op == '-') return  num1 - num2;
    else if( op == 'X') return  num1 * num2;
    else if( op == '/') return  num1 / num2;
}
// Action or Function for number
function  accionN(valuebtn) {
    if( Number(valuebtn) != null ){
        if( valueS == "0" ) {
            valueS = valuebtn;
            tmpNumL = Number(valuebtn);
        }
        else{
            // Grap the left operator
            if(tmpsigno == ""){
                valueS = valueS + valuebtn;
                tmpNumL = tmpNumL * 10 + Number(valuebtn);
            }
            else{
                // Grap the right operator
                valueS = valueS + valuebtn;
                tmpNumR = tmpNumR * 10 + Number(valuebtn);
            }
        }
        show.textContent=valueS;
    }
}
// Se ejecuta las operaciones trinarias
// verfica que los tmpNumL y tmpNumR estan con datos 
function operacionSeguidas() {
    if(tmpNumR != 0){
        result = operacion(tmpNumL , tmpsigno , tmpNumR);
        console.log("se ejecuto");
        console.log(result);
        tmpNumR = 0;
        operacionTrinaria = true;
        tmpNumL = result;
    }
}

// Action or Function for signs
function  accionSig(valuebtn) {
    if( valuebtn === "+" && tmpNumL != 0) {
        operacionSeguidas();
        valueS = valueS + valuebtn;
        show.textContent = valueS;
        tmpsigno = "+";
    }
    else if(valuebtn === "-" && tmpNumL != 0){
        operacionSeguidas();
        valueS = valueS + valuebtn;
        show.textContent = valueS;
        tmpsigno = "-";
    }
    else if(valuebtn === "X" && tmpNumL != 0){
        /*
        // Seria para poner prioriades ejej 
        // mire mi calculadora de la compu y es 
        // sencilla 
        if(tmpsigno == "+") result=tmpNumL;
        if(tmpsigno == "-") result=tmpNumL*-1;
        if(tmpsigno == "X") operacionSeguidas();
        if(tmpsigno == "/") result=tmpNumL*-1;*/
        operacionSeguidas();
        valueS = valueS + valuebtn;
        show.textContent = valueS;
        tmpsigno = "X";
    }
    else if(valuebtn === "/" && tmpNumL != 0){
        operacionSeguidas();
        valueS = valueS + valuebtn;
        show.textContent = valueS;
        tmpsigno = "/";
    }
    else if(valuebtn == "="){
        console.log(tmpNumL,tmpsigno,tmpNumR);
        if(!operacionTrinaria){//es una operacion sencilla como 1+2=2
            result = operacion(tmpNumL , tmpsigno , tmpNumR);
            operacionTrinaria = false;
        }
        else{// es una operacion compleja como 14+11+12, calculo 14+11
             // despues 25 añado 12 37
            result = operacion(result , tmpsigno , tmpNumR);
            operacionTrinaria = false;
        }
        valueS = String(result);
        show.textContent = valueS;
        tmpNum = 0;
        
    }
    
}

ejecutarbtn(btn0, accionN);
ejecutarbtn(btn1, accionN);
ejecutarbtn(btn2, accionN);
ejecutarbtn(btn3, accionN);
ejecutarbtn(btn4, accionN);
ejecutarbtn(btn5, accionN);
ejecutarbtn(btn6, accionN);
ejecutarbtn(btn7, accionN);
ejecutarbtn(btn8, accionN);
ejecutarbtn(btn9, accionN);

ejecutarbtn( btndivision, accionSig);
ejecutarbtn( btnmulti, accionSig);
ejecutarbtn( btnsubtrack,accionSig);
ejecutarbtn( btnadd, accionSig);
ejecutarbtn( btnequals, accionSig );






function getvalueID(id){
   return document.getElementById(id).value;
}

function calculate(v1, v2, operater) {
    switch (operater) {
        case "+":
            return result = v1 + v2;
            break;
        case "-":
            return result = v1 - v2;
            break;
        case "*":
            if(v1 != 0 && v2 != 0){
                return result = v1 * v2;  
            }
             break; 
            
        case "/":
            if(v1 != 0 && v2 != 0){
                return result = v1 / v2;  
            } else { return result = 'Not Match';}
             break; 
    }
}

function submit() {
    var v1 = +getvalueID('v1');
    var v2 = +getvalueID('v2');
    var op = getvalueID('operater');

    var rs =  calculate(v1, v2, op);
    
     document.getElementById('result').value = v1 + op + v2 + '=' + rs;
}


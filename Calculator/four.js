function calculator() {

  
        // Get the selected operator from the dropdown
        var operatorSelect = document.getElementById("operatorSelect");
        var selectedOperator = operatorSelect.value;
  
        // Get operand values
        var operand1 = parseFloat(document.getElementById("value1").value);
        var operand2 = parseFloat(document.getElementById("value2").value);
  
        // Perform the operation based on the selected operator
        var result;
        if(selectedOperator=="+"){
          result=operand1+operand2;
        } else if(selectedOperator=="-"){
          result=operand1-operand2;
        } else if(selectedOperator=="*") {
          result=operand1*operand2;
        } else if(selectedOperator=="/"){
          result=operand1/operand2;
        } else {
          result="invalid operator";
        }
        
        // Display the result in a paragraph with the id "result"
        document.getElementById("result").textContent = "Result: " + result;
      }
    

// Call the calculator function to start the program
    
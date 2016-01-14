//Add/remove row from table with  HTML,CSS, Javascript

// Validating Empty Field
function addFriendWithValidation(){
	var name = document.getElementById("name");
	var email = document.getElementById("email");
	var contact = document.getElementById("contact");
	if(name.value.length == 0){
	    document.getElementById("headMsg").innerHTML = " * please fill All Fileds! *";
		name.focus();
		return false;
	}
	if(inputAphabet(name, "* Name filed should be alphabets only *")){
		if(emailValidation(email, "Enter valid email")){
		 if(NumericContact(contact,"please enter valid contact number ")){
			 if(lengthDefine(contact,10,10)){
				 //Add friend in table
				 	var tbl = document.getElementById("frnData");
					var lastRow = tbl.rows.length;
					var tblBody = document.getElementById("frnData").tBodies[0];
					var newRow = tblBody.insertRow(-1);
					var newCell0 = newRow.insertCell(0)
						newCell0.innerHTML = "<td>" + "<input type='checkbox'>" + "<td>" ;
					var newCell1 = newRow.insertCell(1);
						newCell1.innerHTML = "<td>"+ document.getElementById("name").value +"</td>";
					var newCell2 = newRow.insertCell(2);
						newCell2.innerHTML = "<td>"+ document.getElementById("email").value +"</td>";
					var newCell3 = newRow.insertCell(3);
						newCell3.innerHTML = "<td>"+ document.getElementById("contact").value +"</td>";
						 document.getElementById('addFriendPopup').style.display = "none";
			 }
			}
		}
	}
	return false;
}
//all function come here
// Function that checks whether input text is an alphabetic character or not.
function inputAphabet(inputtext, alertMsg) {
	var alphaExp = /^[a-zA-Z]+$/;
	if (inputtext.value.match(alphaExp)) {
	return true;
	} else {
	document.getElementById('nameMsg').innerText = alertMsg; // This segment displays the validation rule for name.
	//alert(alertMsg);
	inputtext.focus();
	return false;
	}
}
// Function that checks whether an user entered valid email address or not and displays alert message on wrong email address format.
function emailValidation(inputtext, alertMsg) {
	//var emailExp = /^[w-.+]+@[a-zA-Z0-9.-]+.[a-zA-z0-9]{2,4}$/;
	var emailExp = /\S+@\S+\.\S+/;
	if (inputtext.value.match(emailExp)) {
		return true;
	} else {
		document.getElementById('emailMsg').innerText = alertMsg; // This segment displays the validation rule for email.
		inputtext.focus();
		return false;
}
}

// Function that checks whether input text is numeric or not.
function NumericContact(inputtext, alertMsg) {
	var numericExpression = /^[0-9]+$/;
	if (inputtext.value.match(numericExpression)) {
	return true;
	} else {
	document.getElementById('contactMsg').innerText = alertMsg; // This segment displays the validation rule for zip.
	inputtext.focus();
	return false;
	}
}
// Function that checks whether the input characters are restricted according to defined by user.
function lengthDefine(inputtext, min, max) {
	var uInput = inputtext.value;
	if (uInput.length >= min && uInput.length <= max) {
	return true;
	} else {
	document.getElementById('contactMsg').innerText = "* contact Number should be  " + max + " digit long *"; // This segment displays the validation rule for username
	inputtext.focus();
	return false;
	}
}
//Function To Display Add friend  Popup
function div_show() {
	document.getElementById('addFriendPopup').style.display = "block";
}
//Function to Hide add friend  Popup
function div_hide(){
document.getElementById('addFriendPopup').style.display = "none";
}
//Function for remove row from table
function deleteRows(id) {
    /***We get the table object based on given id ***/
    var objTable = document.getElementById(id);

    /*** Get the current row length ***/
    var iRow = objTable.rows.length;

	/*** Initial row counter ***/
	var counter = 0;

    /*** Performing a loop inside the table ***/
	if (objTable.rows.length > 1) {
		for (var i = 0; i < objTable.rows.length; i++) {

			 /*** Get checkbox object ***/
			var chk = objTable.rows[i].cells[0].childNodes[0];
			if (chk.checked) {
				/*** if checked we del ***/
				objTable.deleteRow(i);
				iRow--;
				i--;
				counter = counter + 1;
			}
		}
		/*** Alert user if there is now row is selected to be deleted ***/
		if (counter == 0) {
			alert("Please select the row that you want to delete.");
		}
	}else{
		/*** Alert user if there are no rows being added ***/
		alert("There are no rows being added");
	}
}

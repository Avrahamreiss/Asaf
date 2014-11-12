
		
var myArray = [];	//start empty
var delim = " ";
var currentParm = " ";


function pushToArray() {
           myArray.push(document.getElementById("itemToAddInput").value);
		   document.getElementById("itemToAddInput").value = " "; // reset the input field
           return;
}

function showArrayAsString() {
var arrayAsString = " ";
        delim =  document.getElementById("delimiterInput").value;
	   	arrayAsString = myArray.join(delim);
        arrayAsString = arrayAsString + delim;    // join doesn't add the delimeter after the last array item - I think it should ...
		alert(arrayAsString);
	    document.getElementById("arrayString").value = arrayAsString;   //doesn't work
		
// var ul = document.getElementById("arrayString");   //doesn't work
//		ul.appendChild(arrayAsString);             //doesn't work
		
		
		myArray.length = 0;  // delete the array contents
		document.getElementById("delimiterInput").value = " ";  //reset the delimiter
		return;
}

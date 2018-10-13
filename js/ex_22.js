var a = prompt("Enter a sentence:");
if(a.indexOf("\u0C22") !== -1 || a.indexOf("/") !== -1){
    document.getElementById("die").innerHTML = "Yes";
}
else{
    document.getElementById("die").innerHTML = "No";
}
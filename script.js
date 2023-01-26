    
var p;
var x;
var btn=document.getElementsByTagName("button");

 function EnterNumber(e)
{

document.getElementById("Answer").value+=e;
console.log(e);
}
 
/*function EnterOperator(a)
{
    document.getElementById("Answer").value=a;
    console.log(a);
}*/
//var res = eval("*5");
//console.log(res);

function EnterEqual()
{   
    x=eval(document.getElementById("Answer").value);
    document.getElementById("Answer").value=x;
}
function EnterClear()
{
    document.getElementById("Answer").value="";   
}

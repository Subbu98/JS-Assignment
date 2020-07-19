//function for displaying values
function dis(val)
{
document.getElementById("edu").value+=val;}
//function for evaluation
function solve()
{
var x = document.getElementById("edu").value
var y = eval(x)
document.getElementById("edu").value = y
}
//function for clearing the display
function clr()
{
document.getElementById("edu").value = ""
}

function print(Message:any):void
{
    console.log(Message);
}
function showPoints(alien_color:string)
{ 
    alien_color == "green" ? print("the player earned 5 points"):
    alien_color == "yellow" ? print("the player earned 10 points"):
    alien_color == "red" ? print("the player earned 15 points"):"";
}
showPoints("green");
showPoints("yellow");
showPoints("red");


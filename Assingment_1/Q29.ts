function print(Message:any):void
{
    console.log(Message);
}
var favorite_fruits:string[] = ["Apple","Banana","Orang"]

function checkFavoriteFruit(fruit:string)
{
    if(favorite_fruits.includes(fruit))
    {
      print(`You really like ${fruit}!`);
    }
}
checkFavoriteFruit("Apple");
checkFavoriteFruit("Grape");
checkFavoriteFruit("Orange");
checkFavoriteFruit("Banana");
checkFavoriteFruit("Strawberry");
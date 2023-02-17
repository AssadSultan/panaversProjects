function print(Message:any):void
{
    console.log(Message);
}
function showAgeStage(age:number)
{
   age < 2 ? print("that the person is a baby."):
   age >= 2 &&  age < 4  ? print("that the person is a toddler."):
   age >= 4 &&  age < 13 ? print("that the person is a kid."):
   age >= 13 &&  age < 20 ? print("that the person is a teenager."):
   age >= 20 &&  age < 65 ? print("that the person is a adult."):
   age >= 65  ? print("that the person is a elder."):""
}
showAgeStage(1);
showAgeStage(2);
showAgeStage(10);
showAgeStage(18);
showAgeStage(20);
showAgeStage(35);
showAgeStage(65);
showAgeStage(90);
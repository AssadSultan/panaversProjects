var Age1 = 12;
var Age2 = 20;
var name1 = "ali"
var name2 = "khan"

var names:string[] = ["ali","khan"]

function print(Message:any):void
{
    console.log(Message);
}
print("name1 == 'ali' ? I predict True.");
print(name1 == "ali");
print("name2 != 'ali' ? I predict True.");
print(name2 != "ali");
print("name1 == 'ALI' ? I predict True.");
print(name1 == "ALI")
print("aliAge > 10 ? I predict True.");
print(Age1 > 10)
print("Age2 == 20 ? I predict True.");
print(Age2 == 20)
print("Age2 > 12 ? I predict True.");
print(Age2 > 12);
print("Age2 < 12 ? I predict False.");
print(Age2 < 12);
print("Age2 > 20 ? I predict False.");
print(Age2 > 20);
print("Age2 != 20 ? I predict False.");
print(Age2 != 20);
print("Age2 == Age1 ? I predict False.");
print(Age2 == Age1);
print("Age2 < Age1 ? I predict False.");
print(Age2 < Age1);
print("Age2 >= 20 ? I predict True.");
print(Age2 >= 20)
print("Age2 <= 20 ? I predict True.");
print(Age2 <= 20)
print("Age2 >= 20 && Name2 == 'ali' ? I predict False.");
print(Age2 >= 20 && name2 == "ali")
print("Age2 >= 20 || Name2 == 'ali' ? I predict True.");
print(Age2 >= 20 || name2 == "ali")
print("Age2 >= 20 && Name2 == 'ali' ? I predict False.");
print(names.includes("ali"));
print(names.includes("Gul"));







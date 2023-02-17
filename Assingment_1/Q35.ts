function print(Message: any): void {
    console.log(Message);
}
var animals:string[] = ["dog","cat","horse"]

for (let i = 0; i < animals.length; i++)
{
    print(`A ${animals[i]} would make a great pet.`);
}
print("These All are pet");
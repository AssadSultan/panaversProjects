function print(Message: any): void {
    console.log(Message);
}
var pizzas:string[] = ["Fajita","Peperoni","BBQ"]

for (let i = 0; i < pizzas.length; i++)
{
    print(`I like ${pizzas[i]} pizza`);
}
print("I like BBQ.\nWith Extra toping of olives. \n such as I really love pizza.");

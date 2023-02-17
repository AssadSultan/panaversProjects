function print(Message: any): void {
    console.log(Message);
}
function printOrder(order:string[])
{
    order.forEach((item) => print(item));
}

printOrder(["Club","Chicken"]);
printOrder(["Beef","BBQ"]);
printOrder(["Grill"]);
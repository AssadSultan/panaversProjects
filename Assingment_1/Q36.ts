function print(Message: any): void {
    console.log(Message);
}

function make_shirt(size:string,message:string)
{
    print(`the shirt size is ${size} and message is ${message}`);
}
make_shirt("small","Awesome");
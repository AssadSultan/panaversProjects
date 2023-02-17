function print(Message: any): void {
    console.log(Message);
}

function make_shirt(size:string='Large',message:string='I love JavaScript')
{
    print(`the shirt size is ${size} and message is ${message}`);
}
make_shirt("medium");
make_shirt("small","Awesome");
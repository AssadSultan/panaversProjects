function print(Message: any): void {
    console.log(Message);
}
var magicianNames:string[] =["Akibrus","Angun","Balrus"];

function show_magicians(magicianNames:string[])
{
    magicianNames.forEach((name) => print(name)) ;
} 
function make_great()
{
    for (let i = 0; i < magicianNames.length; i++)
{
    magicianNames[i] = magicianNames[i] +" Great." ;
}
    
}
make_great();
show_magicians(magicianNames);
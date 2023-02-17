function print(Message: any): void {
    console.log(Message);
}
var magicianNames:string[] =["Akibrus","Angun","Balrus"];

function show_magicians(magicianNames:string[])
{
    magicianNames.forEach((name) => print(name)) ;
} 
show_magicians(magicianNames);
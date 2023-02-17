function print(Message: any): void {
    console.log(Message);
}
var magicianNames:string[] =["Akibrus","Angun","Balrus"];

function show_magicians(magicianNames:string[])
{
    magicianNames.forEach((name) => print(name)) ;
} 

function make_great():string[]
{ 
    var _names = magicianNames.slice();    
    for (let i = 0; i < _names.length; i++)
  {
    _names[i] = _names[i] +" Great." ;
  }
  return _names;
    
}
make_great();
show_magicians(magicianNames);
show_magicians(make_great());
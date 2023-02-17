function print(Message: any): void {
    console.log(Message);
}
function make_album(artistName:string,albumTitle:string,tracks?:number):[artistName:string,albumTitle:string,tracks?:number]
{
   
    if(tracks != undefined)
    {
        return [artistName,albumTitle,tracks]
    }
    else
    {
        return [artistName,albumTitle]
    }
   
   
}

print(make_album("Ali","Ali Album"));
print(make_album("Usman","Usman Album"));
print(make_album("Rizwan","Rizwan Album",10))

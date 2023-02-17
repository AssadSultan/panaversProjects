function print(Message: any): void {
    console.log(Message);
}
interface car{
    manufacturer:string;
    modelName:string;
    [key:string]:string;
}

function getCar(manufacturer:string,modelName:string,...options:string[]):car
{
    var car:car ={manufacturer,modelName}
    var keyValue = ""
     options.forEach((opt,index) => {
        if(index % 2 == 0)
        { 
            keyValue = opt ;
            car[keyValue] = ""
         }
        else
        { car[keyValue] = opt
        }
     })
     return car;
  
}
print(getCar("Toyota","GLI","Color","Red"));

function print(Message:string):void
{
    console.log(Message);
}

let worldPlaces =["Madina","Makkah","Najaf","Karbala","Baghdad"];
worldPlaces.forEach(item=> print(item));
print("\n\n");
worldPlaces.slice().sort().forEach((item=> print(item)));
print("\n\n");
worldPlaces.forEach(item=> print(item));
print("\n\n");
worldPlaces.slice().sort().reverse().forEach((item=> print(item)));
print("\n\n");
worldPlaces.forEach(item=> print(item));
print("\n\n");
worldPlaces.reverse().forEach((item=> print(item)));
print("\n\n");
worldPlaces.reverse().forEach(item=> print(item));
print("\n\n");
worldPlaces.sort().forEach((item=> print(item)));
print("\n\n");
worldPlaces.reverse().forEach((item=> print(item)));
print("\n\n");

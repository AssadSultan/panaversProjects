
function print(Message: any): void {
    console.log(Message);
}
function describe_city(city:string,country:string="Pakistan")
{
  print(`${getTitleCase(city)},${getTitleCase(country)}`);
} 
function getTitleCase(text:string):string
{
return text.replace(/\b\w/g, l => l.toUpperCase());
}
describe_city("lahore");
describe_city("Rawalpindi");
describe_city("Madina","Saudiarbia");
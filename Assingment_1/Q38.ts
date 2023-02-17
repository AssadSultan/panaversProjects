
function print(Message: any): void {
    console.log(Message);
}
function describe_city(city:string,country:string="Pakistan")
{
  print(`${city} is in ${country}`);
} 
describe_city("Lahore");
describe_city("Rawalpindi");
describe_city("Madina","Saudiarbia");
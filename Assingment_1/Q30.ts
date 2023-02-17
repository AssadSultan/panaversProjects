function print(Message:any):void
{
    console.log(Message);
}
var users:string[] = ["Admin","AbuBakar","Ramzan","Usman","Khan"]

function showGreeting(user:string)
{
    user == "Admin"? print("Hello admin, would you like to see a status report?")
                    :print(`Hello ${user}, thank you for logging in again.`);
}
users.forEach((user) => showGreeting(user));
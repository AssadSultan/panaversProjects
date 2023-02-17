function print(Message: any): void {
    console.log(Message);
}
var current_users: string[] = ["Admin", "AbuBakar", "Ramzan", "Usman", "Khan"];
var new_users: string[] = ["Ali", "AbuBakar", "Umar", "Rizwan", "khan"];

var _current_users = current_users.slice().map(user => user.toLowerCase());

new_users.forEach((user) => {
        
    print(_current_users.includes(user.toLowerCase()) ? "the person will need to enter a new username."
                                                                                   :"the username is available.")});


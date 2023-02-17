function print(Message: any): void {
    console.log(Message);
}
var numbers:number[] = [1,2,3,4,5,6,7,8,9]

numbers.forEach((number) => print(number == 1 ? "1st":
                                  number == 2 ? "2nd":
                                  number == 3 ? "3rd":
                                  number+"th")  )

const accountId = 123556850
let accountEmail = "Email@mail.com"
var accountPassword = "12466"
accountCity = "Jaipur"
// accountId=2 -NOT ALLOWED
accountEmail="mail@email.com"
accountPassword="2698678"
accountCity = "Banglore"

// var has global scope and can be redelared and its value can be changed
//let has block scope and can't be redeclared and its value can be changed
//const has block scope but it can't be redeclared and its value can't be changed
//Pefer not to use var because of issue in block scope and functional scope
console.log(accountId)
console.table([accountId, accountEmail, accountPassword, accountCity])

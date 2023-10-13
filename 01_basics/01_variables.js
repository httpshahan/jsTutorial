const accountId = 12234
let accountEmail = "info@google.com"
var accountPassword = "12345"
accountCity = "Islamabad"

// const == constant cant be change

accountEmail = "sh@sh.com"
accountPassword = "212121"
accountCity = "Karachi"

/*
Pefer not to use var
 - of block scope and functional scope
*/

console.table([accountId, accountEmail, accountCity, accountPassword])
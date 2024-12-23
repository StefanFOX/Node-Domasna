

//Задача1
let hasCoffee = true;
let hasTea = false;
let hasMilk = true;

//Does the student have either tea or milk?
let rez=hasTea || hasMilk
console.log(rez)
//Does the student have both coffee and tea?
let rez1=hasTea && hasCoffee
console.log(rez1)

// Is it true that the student doesn't have tea?
let rez2=hasTea
console.log(rez2)

// Does the student have either coffee or milk, but not both?
let rez3=hasCoffee || hasMilk
console.log(rez3)

// Is it true that the student has either tea and milk, or coffee and tea?
let rez4=(hasTea && hasMilk) || (hasCoffee && hasTea)
console.log(rez4)

//Does the student have neither coffee nor tea?
let rez5=hasCoffee != hasTea
console.log(rez5);






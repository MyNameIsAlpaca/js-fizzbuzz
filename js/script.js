/* 
1 Scrivere un programma che stampi in console i numeri da 1 a 100
   * per i numeri multipli di 3 deve scrivere "fizz"
   * per i numeri multipli di 5 deve scrivere "Buzz"
   * per i multipli di 3 e di 5 deve scrivere "FizzBuzz"
*/ 


for (let i = 1; i <= 100; i++) {
    
    let containerFizzBuzz = document.getElementById("containerFizzBuzz");
    
    let result = document.createElement("div");

    if (i % 3 == 0 && i %  5 == 0) {
        result.innerHTML = "FizzBuzz";
        result.classList.add("fizzbuzz", "standardcube")
    }
    else if (i % 3 == 0) {
        result.innerHTML = "Fizz";
        result.classList.add("fizz", "standardcube")
    }
    else if (i % 5 == 0) {
        result.innerHTML = "Buzz";
        result.classList.add("buzz", "standardcube")
    }
    else {
        result.innerHTML = i;
        result.classList.add("standardcube")
    }

    containerFizzBuzz.append(result); 
}
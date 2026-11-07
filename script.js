


//1. Rekurzió
function recursion(n, steps) {
    
    if (n < 0) return null;
    if (n <= 1) return n;
    steps.db++;
    return recursion(n - 1, steps) + recursion(n - 2, steps);

}

// 2. Iteratív 
function iteration(n, steps) {

    if (n < 0) return null;
    if (n <= 1) return n;
    let a = 0;
    let b = 1;

    for (let i = 2; i <= n; i++) {
        let next = a + b;
        a = b;
        b = next;
        steps.db++;
    }
    return b;
}

function dynamic(n, steps) {

    if (n < 0) return null;
    if (n <= 1) return n;

    const memory = [0, 1];

    for (let i=2; i<=n; i++){
        memory[i]= memory[i-1] + memory[i-2];
        steps.db++;
    }
    return memory[n];
}


/*const recursivSteps={db: 0};
const iterativSteps= {db: 0};
const dynamicSteps = {db: 0};


console.log(recursion(20, recursivSteps));
console.log(recursivSteps.db);
console.log(iteration(20, iterativSteps));
console.log(iterativSteps.db);
console.log(dynamic(20, dynamicSteps));
console.log(dynamicSteps.db);*/

const gomb = document.getElementById("szamol");

gomb.addEventListener("click", function () {
    const n = Number(document.getElementById("fibonacciN").value);

    //Ellenőrizzük a beírt számot

    if (!Number.isInteger(n) || n < 0 || n > 35) {  
    alert("Adj meg egy egész számot 0 és 35 között!");
    return;
}

    const recursivSteps = { db: 0 };
    const iterativSteps = { db: 0 };
    const dynamicSteps = { db: 0 };

    let recFn = recursion(n, recursivSteps);
    let itFn = iteration(n, iterativSteps);
    let dynFn = dynamic(n, dynamicSteps);

    document.getElementById("eredmeny").textContent = `A(z) ${n}. Fibonacci szám: ${recFn}`;

    document.getElementById("rekurzivEredmeny").textContent = recFn;
    document.getElementById("iterativEredmeny").textContent = itFn;
    document.getElementById("dinamikusEredmeny").textContent = dynFn;  
    document.getElementById("rekurzivLepes").textContent = recursivSteps.db;
    document.getElementById("iterativLepes").textContent = iterativSteps.db;
    document.getElementById("dinamikusLepes").textContent = dynamicSteps.db;

});


function divider(input) {
    console.log("\n" + "=".repeat(20), input, "=".repeat(20), "\n");
}

divider('Aufgabe 1');

for(let i = 1; i <= 4; i++)
{
    let str = '';
    for(let j = 1; j <= i; j++)
    {
        str += ' *';
    }
    console.log(str);
}

divider('Aufgabe 2');

const ARR = 
[
    [1, 2, 1, 24], 
    [8, 11, 9, 4], 
    [7, 0, 7, 27], 
    [7, 4, 28, 14], 
    [3, 10, 26, 7]
];

function rowInput(ARR)
{
    for(let i = 0; i < ARR.length; i++)
    {   
        console.log(`row ${i}`);
        for(let j = 0; j < ARR[i].length; j++)
        {
            console.log(ARR[i][j]);
        }
    }
}
rowInput(ARR);

divider('Aufgabe 3');
    
let str = ' ';

for(let i = 1; i <= 4; i++)
{
    for(let j = 1; j <= 3; j++)
    {
        str += ' ' + i ;
    }
}
console.log(str);

let strTwo = ' ';

for(let i = 0; i < 3; i++)
{
    for(let j = 0; j < 5; j++)
    {
        strTwo += ' ' + j ;
    }
}
console.log(strTwo);







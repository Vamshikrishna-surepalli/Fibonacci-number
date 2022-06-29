let givenNum=50;
let n1 = 0
let n2 = 1
let fibs = 0
for (let i = 0; i <= givenNum; i++) {
    if(n1<givenNum){
        console.log(n1);
    fibs = n1 + n2;
    n1 = n2;
    n2 = fibs;
    }
}
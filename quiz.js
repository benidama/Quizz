//  addtio = (q,w) =>(q * w); 

// addtio(3,27);


function myName(dn){
    var nam;
    switch(dn){
        case 1:
            nam = ann
            break;
            case 2:
                nam = gabi
                break;    
    }
    console.log(nam);
}

myName();

function oddOrEven(n){
    // for(let n =0; n <= 100; n++)
    if(n % 2 === 0){
        console.log("Even");
    } else{
        console.log("Odd");
    }
}

oddOrEven(21);


function myGod(str){
    let countMe = 0;
    var str = str.split(" ");
    for(let i = 0; i < str.length; i++){
        switch(str){
            case 'a':
                countMe++;
                break;
    
            case 'e':
                countMe++;
                break;  
                    
            case 'i':
                countMe++;
                break;  
                
            case 'o':
                countMe++;
                break;    
    
            case 'u':
                countMe++;
                break;
    
    
        }
    }
    return countMe;
}



function greetingUser (n){
    let user = 0;
    for(var i =0;  i < user.length; i++){
        if(i === johnny){
            return "hi honey";
        } else{
            return "hi";
        }
    }
}

greetingUser();


function gtrrt(name){
    if(name === hoxjkkkk){
        return 'hi honey';
    } else{
        return "'hi, ' + name '!'"
    }
}
    

function dividByTwoNmbers(n,x,y){
    
    if(n % x && n % y === 0) {
        return 'divisible';
    }else{
        return 'not';
    }
}


// function makeNegas(n){
//     if(n < 0){
//         return n;
//     } else {
//         return n*-1;
//     }
// }

function makeNegas(n){
    return(n< 0) ? n : n*-1;
}


var integer = [2, -4, 7, 8,-5];
function indSmallest(i){
    if(i <integer.length){
        return i;
    } else{
        return 'not';
    }

}

// class dhdkaLl(){
//     shsklkahhl (fdg){
//         return Math.min(...fdg);
//     }
// }


// function summation(n){
//     let n = 0;
//     for(let i = 1; i <=n; i++){
//         n = n + i;
//     }
//     console.log(n);
// }

// summation();



function rounded(sun){
    const count = sun.length;
    let sum = 0;
    for(i = 0; i < count; i++){
        sum =sum + sun[i];
    }
    const avg = sum/count;
    const coundwon = Math.floor(avg);
    return coundwon;
}


function gameover(p1, p2) {
    if(p1 === scias){
        if(p2 === scias){
            return 'draw';
        }
        if(p2 === paper){
            return 'p1 won';
        }
        if(p2 ===rock){
            return 'p2 won';
        }

    }
    if(p1 === paper){

    }
    if(p1 === rock){

    }
}

const strb = 'helo';
function remove(){
    console.log(strb.substr(1, strb.length-2)) ;
}
remove();
    



 function smmer(arr){
     let sum = 0;
     for(i=0; i<arr.length; i++){
         if(arr[i] > 0)
         {
            sum = sum + arr[i];
        }
        }
     return sum;
 }
 function diffirent(oppp, v1,v2){
     let result;
     switch(oppp){
         case '+':
             result = v1+v2;
             break;
         case '-':
            result = v1-v2;
            break; 
         case '/':
            result = v1/v2;
             break; 
         case '*':
            result = 10*2;
            break;    
     }
     return result;
 }
diffirent();

// const fusil = v1 + 0pp +v2;
// const dlhl = eval(fusil);
// return dlhl;


// function helloStr(vuga, fig){
//     var straefsf = '';
//     for(i = 0; i<vuga; i++){
//         straefsf = straefsf + fig;
//     }
//     return straefsf;
// }
// helloStr(3,'hi');


function fsjKgkXkk(s,n){
    return n.repeat(4);
}

// const varrr = 'mwiriwe';

// console.log(varrr.substr(1, varrr.length-2)) ;

function spting(){
    var habaye = ' i like to playing a football';
    var ikise = habaye.split(' ').reverse();
    console.log(ikise);
}
spting();

function noSpace(arr){
    const ature = arr.split(' ');
    const news = [];
    for(let i =0; i< ature.length; i++){
        const turumwe = ature.trim();
        news.push(turumwe);
    }
    var mostes = news.join('');
    return mostes; 
}


function doubled(arr){
    const doubl = arr.map((double) =>
    {
        return double*2;
        
    }); 
return doubl;
}



 
// return (d/g >=2) ? true : false;


const arr1 = [2,4,6,7];
const arr2 = [3,45,9,1];
const newArr = arr1+arr2;
// console.log([newArr]);

const final =arr1.concat(arr2);
console.log(final);

// function addarr(arr1,arr2){
//     const sum = 0;
    // for(var i = 0; i < arr1.length; i++){
        // const first = arr1;
        // const firt = arr2;
    //     const both = first + firt;
    //     sum = sum + both;
    
    //  console.log('sum');

var centru = 2779;
console.log(Math.ceil(centru/100));


// function humanyear(hum){
//     const caty;
//     const dogy;
//     if(hmyeu === 1){
//         return[hmyeu,15,15];
//     }
//     if(hmyeu === 2){
//         return[hmyeu,24,24];
//     }
//     const accyrs = hmyeu-2;
//     const catys = accyrs*4;
//     const dogys = accyrs*5;
//     return [hmyeu, catys+24, dogys+24];
// }

function addtionArr(n){
    return n*2;
}

const doubledd = arr1.map(addtionArr);
console.log(doubledd);


let myArry = [3,4,5,7];
let myArry1 = [5,6,9,12];


const functi = myArry1.map(function doul(x){
    return x.toString(2);
});
console.log(functi);


const myWork = [
    {firstName: 'Peter', lastName: 'Nahayo', age: 21 },
    {firstName: 'Jul', lastName: 'Jahari', age: 21 },
    {firstName: 'Her', lastName: 'Ytawe', age: 21 },
    {firstName: 'Gael', lastName: 'Yaguye', age: 21 },

];

const outPut = myWork.filter(el =>{return el.firstName
},0);
console.log(outPut);


const workz = ['hell','Peter','Jul','Gael','Nahayo'];

// const workz = [2,4,3,6,5,13,24];
// const neswe = workz.filter(a =>{
//     if(a % 2 === 0) return a
// })

// console.log(neswe);

const anni = workz.filter(el =>{
    if(el.length < 5) return 'el'
})

console.log(anni);

const anna = workz.pop();
console.log(anna);

// class habayeki{
//     static onMy(){
//         return `hi, {$ hello world}`;
//     }
// }
// const ben = new habayeki();
// console.log(habayeki.onMy());


// Event
function displayDte(){
    document.getElementById('demo').innerHTML = Date();
    }
document.getElementById('demo').addEventListener("blur", function(event){
    event.target.innerHTML = "";
}, true)

    // static
class ntabotuzi{
    static haruna(){
        return `hello world,is it me ?`
    }
}
const muhirwa = new ntabotuzi;
console.log(ntabotuzi.haruna());


// inhertance
class manxnsxahx{
    constructor(fname, lname){
        this.fname = fname;
        this.lname = 'Jean';
    }
}
// console.log(manxnsxahx);

class age extends manxnsxahx{
    constructor(age, occ){
        super('Haku', 'Paul');
        this.age = age;
        this.occ = ' programmer';
    }
    showyou(){
        console.log(`my names are ${this.fname} ${this.lname}`);
        console.log(`the age is ${this.age} and I am an expert${this.occ}`);
    }
}

const you = new age(29);
you.showyou();


//  document.querySelector("#para").innerHTML = "Dukunda abana kko abana n'umugisha";
//  document.querySelector("#para").style.color = "green";

document.querySelector("p").textContent = "hi";


var navi = document.querySelectorAll(".navas");
console.log(navi[0].getAttribute("data-number"));
console.log(navi[0].getAttribute("data-name"));
console.log(navi[1].getAttribute("data-number"));
console.log(navi[1].getAttribute("data-name"));



console.log(navi[0].dataset.number);
console.log(navi[0].dataset.name);

document.querySelector(".listener").addEventListener("click", function() {
    // document.querySelector(".listener").innerHTML = "learn listenerEvent"
    document.querySelector(".hari").style.fontSize = "2em"
    document.querySelector(".hari").style.color = "tomato"
}, true);
document.querySelector(".listener").addEventListener("blur",function(){
    document.querySelector(".hari").style.color = "";
},true)

let myInput = document.getElementById("np");
myInput.addEventListener("focus", function(event){
   event.target.style.background= "blue";
},true);

myInput.addEventListener("blur",function(change){
    change.target.style.background = "";
},true)




for(i =0; i<8; i++){
    if(i== 5)break;
    console.log(i);
}






































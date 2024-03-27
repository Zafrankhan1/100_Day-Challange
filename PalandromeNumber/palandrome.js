// (Method 1): Traditional Method:

let palandrome=[12153456789];
// We will convert to string because it is one element and can not reverse directly by converting to to string it will reverse easily
let result1=palandrome.toString();
console.log(result1);
// we split because to convert into multiple sub string to check one by one 
let result2=result1.split("");
console.log(result2);
// by converting into sub string we will put into an array 
let result3=result2.map((value)=>value)
// we reverse because to check the whether the first index and last index is same or not
let result4=result3.reverse();
console.log(result4);


for(let i=0; i<result2.length; i++){
   
        if(result2[i]===result4[i]){
            continue;
            console.log(result2[i],result3[i]);
            console.log("it is a palandrome");
        }else{
            console.log("not a palandrome");
            break;
        }
    
};


// Method 2: shortcut

let numberArray=[2345];

let temp=numberArray.toString().split("").reverse().join("")
console.log(temp);

if(numberArray===temp){
    console.log("palandrome");
}else{
    console.log("Absolutly not ");
}


// Method 3: Using function;

function isPalandrome(x){
  console.log(x);
 let toString=x.toString();
 let toSplit=toString.split("");

 let array=toSplit.map((value)=>value);

 let reverse=array.reverse();

 for(let i=0; i<array.length; i++){
    if(toSplit[i]===reverse[i]){
        console.log("it is a palandrome");
        continue;
    }else{
        console.log("not a palandrome");
        break;
    }
 }

}


isPalandrome(121);

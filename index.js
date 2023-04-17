// for loops 
let n =prompt("enter a number ")
a=Number.parseInt(n)
sum=0

for (let i=1; i<n; i++){
  sum+=i
}
console.log("sum of first "+ n + "natural number" +sum)




// for in loops 

const k={
  raju:90,
  kaju:68,
  ramu:57,
  meena:98
}
   for(let i in k){
   console.log("marks of "+i+  " is "+k[i])
   }

// for of loops 
 for(let i of "avinash"){
   console.log(i)
   }

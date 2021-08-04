
//A function that receives a parameter and returns a Promise

const promise1=(wordValue)=>
new Promise((resolve,reject)=> {
      if(wordValue==='good'){
        resolve('ok')
    }
    else{
        reject('the message is incorrect')
    }
});

<<<<<<< HEAD:Milestone1/promise/promis.js
promise1('good')
.then(res =>console.log(res))
.catch(reject=>
    console.log(reject)
);
=======
// promise1('hkjj')
// .then(res =>console.log(res))
// .catch(reject=>
//     console.log(reject)
// );
>>>>>>> 135532ce0d6a9e97ee85d208884fd233b7f83ea7:promise/promis.js

// A function that receives 2 numbers and returns a promise

const promise2 = (firstNum,seconsNum) => 
  new Promise((resolve, reject) => {
        if ((typeof firstNum !== 'number')  || (typeof seconsNum !== 'number')){
          reject('Wrong Input')
        }
        else if (firstNum>seconsNum){
          resolve ('first number is bigger')
        }
        else{
          resolve ('second number is bigger')
        }         
});


// promise2(firstNum = 10,seconsNum = 5)
// .then(res => console.log(res))
// .catch(reject => {
// 	console.log(reject);
// })

// A function that receives a parameter and returns a promise

const promise3=(num)=>
new Promise((resolve)=>{
    resolve('message info'+' '+num)
});

// promise3(10)
// .then(res=>console.log(res));

//promise all In order 1
function promiseAll(){
   promise1('good').then((res)=> {
     setTimeout(() => {
      console.log(res);
     }, 1000);
     promise3(8).then((res)=>{
       setTimeout(() => {
        console.log(res)
       }, 2000);
       promise2(8,4).then((res)=>{
         setTimeout(() => {
          console.log(res);
         }, 3000);
     })
    })
   })
}
// promiseAll();

// promise2('a').catch(reject=>console.log(reject))
// promise1('nogood').catch(reject=>console.log(reject))


//promise all In order 2

function promiseAll2(){
    promise3(5).then((res)=>{
      setTimeout(() => {
        console.log(res)
      }, 1000);
    promise1('good').then((res)=>{
      setTimeout(() => {
        console.log(res)
      }, 2000);
    promise2(0,1).then((res)=>{
      setTimeout(() => {
        console.log(res)
      }, 3000);
    })
  })
    })
  }
promiseAll2();

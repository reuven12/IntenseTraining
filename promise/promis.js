
//A function that receives a parameter and returns a Promise

const promise1=(wordValue)=>
new Promise((resolve,reject)=> {
    setTimeout(() => {
        
    }, 2000);
if(wordValue==='good'){
resolve('ok')
}
else{
    reject('the message is incorrect')
}
});

// promise1('good')
// .then(res =>console.log(res))
// .catch(reject=>
//     console.log(reject)
// );

//A function that receives 2 numbers and returns a promise

const promise2 = (firstNum,seconsNum) => 
  new Promise((resolve, reject) => {
      setTimeout(() => {
          
      }, 1000);
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


// promise2(firstNum = 10,seconsNum = '9')
// .then(res => console.log(res))
// .catch(reject => {
// 	console.log(reject);
// })

// A function that receives a parameter and returns a promise

// const promise3=(num)=>
// new Promise((resolve)=>{
//     resolve('message info'+' '+num)
// });

// promise3(10)
// .then(res=>console.log(res));

//promise all In order 1

// Promise.all([
//    promise1('good'),
//    promise3(8),
//    promise2(8,4) 
// ])
// .then(res=>console.log(res))
// .catch(reject=>console.log(reject))

promise2('a').catch(reject=>console.log(reject));
promise1('nogood').catch(reject=>console.log(reject));


//promise all In order 2

// Promise.all([
//     promise3(5),
//     promise1('good'),
//     promise2(0,1)
// ])
// .then(res=>console.log(res))
// .catch(reject=>console.log(reject))

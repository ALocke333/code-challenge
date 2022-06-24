function findSum(numbers) {
  let total = 0;
  for (let i = 0; i < numbers.length; i++) {
    total += numbers[i];
   }
  return total;
  };
console.log(findSum());

 
 
  function findFrequency(data) {
    let result = {
      most: '' ,
      least: ''
  };
  let mostCount = 0, leastCount = data.length;
  for (let i = 0; i < data.length; i++) {
  let count = 0;
  for (let j = 0; j < data.length; j++) {
  if (data[i] === data[j])  
      ++count;  
  }    
 if (count > mostCount) {
   mostCount = count;
   result.most = data[i];
}
if (count < leastCount) {
  leastCount = count;
  result.least = data[i];
}
}
return result;
}; 
console.log(findFrequency());


function isPalindrome(string) {
 const length = string.length;
 for (let i = 0; i < length / 2; i++) {
   if (string[i] !== string[length - 1 - i]) {
     alert ('False');
   }
 }
alert ('True');
};
const string = prompt('Enter a string');
const value = isPalindrome(string);
console.log(isPalindrome());

function largestPair (array) {
  var max = -Infinity;
  for (let i = 0; i < array.length-1; i++) {
    max = array[i]*array[i+1]>max?array[i]*array[i+1]:max;
     }
     return max;
  };
console.log(largestPair());

function removeParenth (string) {
  var s = String(prompt('Enter String'))
  var result = ''
  for (let i = 0; i < s.length; i++) {
    if (!(s[i]==='('|| s[i]===')')) 
      result+=s[i]
    }
    
  return result
};
console.log(removeParenth());

function scoreScrabble (string) {
  let sum = 0
  temp = String(prompt('Enter a word : '))
  let s = {
    1 : ['a', 'e', 'i', 'o', 'u', 'l', 'n', 'r', 's', 't'],
    2 : ['d', 'g'],
    3 : ['b', 'c', 'm', 'p' ],
    4 : ['f', 'h', 'v', 'w', 'y'],
    5 : ['k'],
    8 : ['j', 'x'],
   10 : ['q', 'z'],  
  }
  let list = Object.entries(s)
  for(let i in temp){
  for(let j in list){
  if (list[j][1].includes(temp[i])){
    sum+=Number(list[j][0])
    }
   }
  }
  return sum 
};
console.log(scoreScrabble());

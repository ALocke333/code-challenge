 findSum = function(array) {
  let total = 0;
  for (let i = 0; i < array.length; i++) {
    total += array[i];
   }
  return total;
  };
 
 
  findFrequency = function(array) {
    let result = {
      most: '' ,
      least: ''
  };
  let mostCount = 0, leastCount = array.length;
  for (let i = 0; i < array.length; i++) {
  let count = 0;
  for (let j = 0; j < array.length; j++) {
  if (array[i] === array[j])  
      ++count;  
  }    
 if (count > mostCount) {
   mostCount = count;
   result.most = array[i];
}
if (count < leastCount) {
  leastCount = count;
  result.least = array[i];
}
}
return result;
}; 



 isPalindrome = function(str) {
 const length = str.length;
 for (let i = 0; i < length / 2; i++) {
   if (str[i] !== str[length - 1 - i]) {
     alert ('False');
   }
 }
alert ('True');
};
const str = prompt('Enter a string');
const value = isPalindrome(str);


 largestPair = function(array) {
  var max = -Infinity;
  for (let i = 0; i < array.length-1; i++) {
    max = array[i]*array[i+1]>max?array[i]*array[i+1]:max;
     }
     return max;
  };


 removeParenth = function(str) {
  var s = String(prompt('Enter String'))
  var result = ''
  for (let i = 0; i < str.length; i++) {
    if (!(s[i]==='('|| s[i]===')')) 
      result+=s[i]
    }
    
  return result
};


 scoreScrabble = function(str) {
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

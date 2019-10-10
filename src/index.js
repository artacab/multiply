module.exports = function multiply(first, second) {
  let firstArray = first.split('').reverse();
  let secondArray = second.split('').reverse();
  let resultArray = [];
  let forAdd = [];
  if(firstArray.length < secondArray.length){
    let temp = firstArray;
    firstArray = secondArray;
    secondArray = temp;
  } 
secondArray.forEach((el1,i) => {
  resultArray=[];
  let yield = 0;
  firstArray.forEach((el2,j) => {
    let m = 0;
    resultArray[j] = j == firstArray.length - 1  ? parseInt(el2) * parseInt(el1) + yield : (parseInt(el2) * parseInt(el1))%10 + yield;
    if(resultArray[j] > 9 && j!=firstArray.length - 1) {
      resultArray[j]%=10;
      m++;
    }
    yield = Math.floor((parseInt(el2) * parseInt(el1))/10) + m; 
  });
  resultArray = resultArray.reverse();
  if(i!=0){
    let k = i;
    while(k>0){
    resultArray.push(0);
    k--;}
  }
  forAdd.push(resultArray.join('').split('').reverse().join(''));   

});
return add(forAdd);
}

let add = function(array) {
  let result = [];
  let len = array[array.length-1].length;
  for (let i = 0; i < array.length; i++) {
      let len2 = array[i].length;
    for (let j = 0; j < len - len2; j++) {
      array[i]+='0';
    }
  }
  for (let i = 0; i < len; i++) {
    let temp = 0;
    for (let j = 0; j < array.length; j++) {
        temp += parseInt(array[j][i]);
    }
    result.push(temp);
  }
  let n = 0;
  let complete = result.map ((item, index) => {
    let k = item;
    let m = 0;
    item = index == result.length - 1 ? item + n : item % 10 + n;
    if(item > 9 && index != result.length - 1){
      m = Math.floor(item / 10);
      item %= 10;
    }
    n = Math.floor(k / 10) + m;
    return item;
  });
  console.log(complete.reverse().join(''));
  return complete.join('');
}

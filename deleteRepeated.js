function noLetterRepeated(string){
    let list = string.split('');
    let newArray = [];
    for (let i = 0; i < list.length; i++){
        if (list[i]!==list[i+1] && list[i]!==newArray[newArray.length]){
            newArray.push(list[i])
        }
    }
    let newString = newArray.join('');
    return newString;
    }
console.log(noLetterRepeated('abbrra')) // 'abra'
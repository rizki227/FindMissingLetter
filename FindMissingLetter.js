function findMissingLetter(array)
{
  const string = "abcdefghijklmnopqrstuvwxyz"
  const lower = string.toLowerCase().split('')
  const upper = string.toUpperCase().split('')
  //start didapatkan dari pencari elemen pertama array di lower/upper 
  let start = array[0] == array[0].toLowerCase() ? lower.findIndex(e=>e==array[0]):upper.findIndex(e=>e==array[0])
  let end = start + array.length
  let arrayIndex = 0
 for(let i = start;i < end;i++){
    if(array[0] == array[0].toLowerCase()){
      if(lower[i] != array[arrayIndex] ){
        return lower[i]  
      }else{
        arrayIndex++
        continue
      }
    }else{
      if(upper[i] != array[arrayIndex]){
        return upper[i];
      }else{
        arrayIndex++
        continue
      }
    }
   
  }
  
}
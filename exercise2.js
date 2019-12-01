function balikstring(kata) {
var hasil=''
  for (let i = kata.length -1 ; i >= 0; i--){
      hasil+=kata[i]
   }
return hasil
}

console.log(balikstring('hello world!'))
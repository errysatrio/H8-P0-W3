function palindrome(kata) {
    var cek=''
    var hasil=true
    for (let i = kata.length-1; i >= 0 ; i--) {
        cek+=kata[i]
    }
    if (cek!==kata) {
        hasil=false
        return hasil
    }
    return hasil

}

  
  
  console.log(palindrome('katak')); 
  console.log(palindrome('blanket'));
  console.log(palindrome('civic')); 
  console.log(palindrome('kasur rusak')); 
  console.log(palindrome('mister')); 
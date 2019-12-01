function angkaPalindrome(num) {
    var hasil = 0
    if (num[0]!==num.length-1) {
        hasil+=num+1
        for (let i = 0; i < hasil.length; i++) {
            if (i>1) {
                hasil-hasil[hasil.length-1]+hasil[0]
                return hasil
            }   
        } 
    } 
    return hasil
}
  
  




console.log(angkaPalindrome(8)); // 9
console.log(angkaPalindrome(10)); // 11
console.log(angkaPalindrome(117)); // 121
console.log(angkaPalindrome(175)); // 181
console.log(angkaPalindrome(1000)); // 1001
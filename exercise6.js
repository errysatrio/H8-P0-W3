function angkaPalindrome(num) {
    num+=1
    if (num.toString().length>1){
        while(num.toString()[0]!==num.toString()[num.toString().length-1])
        num++
    }
    return num
}
  
  




console.log(angkaPalindrome(8)); // 9
console.log(angkaPalindrome(10)); // 11
console.log(angkaPalindrome(117)); // 121
console.log(angkaPalindrome(175)); // 181
console.log(angkaPalindrome(1000)); // 1001
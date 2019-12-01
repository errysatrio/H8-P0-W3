function pasanganTerbesar(num) {
    var max=0
    var hasil=''
    for (let i = 0; i < num.length; i++) {
        for (let j = 1; j < num.length; j++) {
            hasil+=num.toString()[i][j].toString()        
        }
        
    }
    
    return hasil
  }

  console.log(pasanganTerbesar(641573)); // 73
  console.log(pasanganTerbesar(12783456)); // 83
  console.log(pasanganTerbesar(910233)); // 91
  console.log(pasanganTerbesar(71856421)); // 85
  console.log(pasanganTerbesar(79918293)); // 99

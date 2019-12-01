function pasanganTerbesar(num) {
    var puluhan=[]
    var hasil='' 
    var max=0
    var maxsatuan=0
    for (let j = 0; j < num.toString().length-1; j++) {
        hasil=''
        hasil+=num.toString()[j]+num.toString()[j+1]
        puluhan.push(hasil*1)
        }
        max=puluhan[0]
    for (let j = 1; j < puluhan.length; j++) {
        // console.log(puluhan[j])
        if (max<puluhan[j]) {
            max=puluhan[j]
        }
        
    }
        
        
    //     if (max<puluhan[j]){
    //         max=puluhan[j].toString()+puluhan[j+1].toString()
    //     } else if (max===puluhan[j]){
    //         max.toString()+=puluhan[j].toString()
    //         max*1
    //     } else {
    //         max.toString()+=puluhan[j].toString()
    //     }
    // }
    return max*1
  }

  console.log(pasanganTerbesar(641573)); // 73
  console.log(pasanganTerbesar(12783456)); // 83
  console.log(pasanganTerbesar(910233)); // 91
  console.log(pasanganTerbesar(71856421)); // 85
  console.log(pasanganTerbesar(919293919499)); // 99

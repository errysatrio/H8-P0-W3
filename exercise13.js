function targetTerdekat(arr) {
    var operasi=0
    var hasil=[]
    var min=0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i]==='o') {
            for (let k = 0; k < arr.length; k++) {
                if (arr[k]==='x') {
                    operasi=k-i
                    // in case gaboleh pake math.abs()
                    // if (operasi<=0) {
                    //     operasi*=-1
                    // }
                hasil.push(Math.abs(operasi))
                }
            }
        }    
    }
    for (let j = 0; j < hasil.length; j++) {
        for (let l = 1; l < hasil.length; l++) {
            min=hasil[j]
            if (min-hasil[l] >0 ) {
                min=hasil[l]
                return min
            } else if (min===undefined) {
                return 0
            
            } else {
                return min
            }
        }
    }
}
  
  console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
  console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
  console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
  console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
  console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2
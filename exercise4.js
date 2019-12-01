var input = ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"]
 

function dataHandling2(arr){
    arr.splice( 4, 2,'Pria', 'SMA International Metro')
    arr.splice( 1, 1, 'Roman Alamsyah Elsharawy')
    arr.splice( 2, 1, 'Provinsi Bandar Lampung')
    arr[3].split("/")
    console.log(arr)
    switch(arr[3].split('/')[1]) {
        case '01': { console.log('Januari'); break; }
        case '02': {console.log('February'); break; }
        case '03': { console.log('March'); break; }
        case '04': { console.log('April'); break; }
        case '05': { console.log('May'); break; }
        case '06': { console.log('June'); break; }
        case '07': { console.log('July'); break; }
        case '08': { console.log('August'); break; }
        case '09': { console.log('September'); break; }
        case '10': { console.log('October'); break; }
        case '11': { console.log('November'); break; }
        case '12': { console.log('December'); break; }
        default : {console.log('please input number'); break}
    }
    console.log(arr[3].split('/').join('-'))
    console.log(arr[1].split('').slice(0, 14).join(''))
    return arr
}

dataHandling2(input)
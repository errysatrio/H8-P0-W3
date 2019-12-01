var input = ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"]
 

function dataHandling2(arr){
    arr.splice(4, 1,'pria', 'SMA International Metro')
    arr.splice(1,1, 'ro')
    return arr
}

console.log(dataHandling2(input))anald
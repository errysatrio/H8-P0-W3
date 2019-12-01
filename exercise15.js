function groupAnimals(animals) {
    var a=[]
    var b=[]
    var c=[]
    for (let i = 0; i < animals.length; i++) {
      if (animals[i][0]===animals[i+1][0]){
        cont1.push(animals[i+1])
      } else 
    }
}
  
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
  // [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
  // [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]
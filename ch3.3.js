function countBs(x){
  var count=0;
  for(var ctr=0;ctr<x.length;ctr++){
    if(x.charAt(ctr)=="B"){
      count++;
    }
  }
  return count;
}

function countChar(x1,x2){
  var count=0;
  for(var ctr=0;ctr<x1.length;ctr++){
    if(x1.charAt(ctr)==x2){
      count++;
    }
  }
  return count;
}

console.log(countBs("BBC"));
// → 2
console.log(countChar("kakkerlak", "k"));
// → 4
function sum(x){
  var count=0;
  for(var ctr=0;ctr<x.length;ctr++){
    count+=x[ctr];
  }
  return count;
}

function range(start,end,inc){
  var count=[];
  if(inc==null){
    inc=1;
  }
  while(start!=(end+inc)){
    count.push(start);
    start+=inc;
  }
  return count;
}

console.log(sum(range(1, 10)));
// → 55
console.log(range(5, 2, -1));
// → [5, 4, 3, 2]
var size = 8;
var pounds=" ";
var res=""
for(var count=0;count<8;count++){
  for(var count2=0;count2<8;count2++){
    if(count%2==0){
      if(count2%2==0){
        pounds+="#";
      }
      else{
        pounds+=" ";
      }
    }
    else{
      if(count2%2!=0){
        pounds+="#";
      }
      else{
        pounds+=" ";
      }
    }
  }
  console.log(pounds);
  if(count%2==0){
    pounds="#";
  }
  else{
  	pounds=" ";
  }
}
var a= ['#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff'];
var b=0;
var maindivtimeoutid;
document.getElementById('main').addEventListener('mouseover',()=>{
  clearTimeout(maindivtimeoutid);
})
function cal(index){
  id='color'+index.toString();
  var sh=document.getElementById(id).value;
  a[index]=sh;
  console.log(a);
}
seconds.oninput = function cal2(){
  var sec=document.getElementById('seconds').value;
  document.body.style.backgroundColor=a[b];
  do{
    b=(b+1)%8;
  }while(a[b]==='#ffffff');
  setTimeout(cal2,sec*1000);
}
function change(){
  var x=document.getElementById("main");
  x.style.opacity=1;
  clearTimeout(maindivtimeoutid);
  maindivtimeoutid=setTimeout(change2,3000);
}
function change2(){
  var x=document.getElementById("main");
  x.style.opacity=0;
}

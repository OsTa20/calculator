/* dialog */
var dialog =document.getElementById("dialog");
var menuopen =document.getElementById("menubtn");
var menuclose =document.getElementById("closedialog");

function fopendialog (){
  dialog.setAttribute("open","true");
}
function fclosedialog (){
  dialog.removeAttribute("open");
}
menuopen.addEventListener("click",fopendialog);
menuclose.addEventListener("click",fclosedialog);
/* done   */
/*    السطر الأول       */
var screen ='';
var history1 ='';
var history2 ='';
var delet =[];
var index=0;
var num1 = 0;
var num2 = 0;
var num1fordelet =[];
var num2fordelet =[];

var click=0;
var numprocs =1;
var result=0.1;
var procssingl=[];
var index2=-1;
var btnonc2 =false;
var btnon = document.getElementById("on");
var btnac =document.getElementById("ac");
var btndelet=document.getElementById("delet");
var btnclean =document.getElementById("clean");
var btn7 = document.getElementById("btn7");
var btn8 = document.getElementById("btn8");
var btn9 = document.getElementById("btn9");
var divi = document.getElementById("divi");
var handred = document.getElementById("handred");

function fon(){
  if (btnonc2==false) {
    btnonc2=true;
    document.getElementById("div-in").innerHTML='welcom';
  }
  else if(btnonc2==true) {
    btnonc2=false;
    screen='';
    history1 ='';   
    history2='';
    index=0;
    delet=[''];
    num1= 0;
    num2= 0;
    num1fordelet =[''];
    num2fordelet =[''];
    
    numprocs=1;
    click=0;
    procssingl=[''];
    index2=0;
    document.getElementById("div-in").innerHTML=screen;
    document.getElementById("screenresult").innerHTML=screen;
    alert("~~~~~~~~~~~~~~~~~~~~~~~~~\n ***   We hope you have enjoyed   *** \n~~~~~~~~~~~~~~~~~~~~~~~~~");
  }
}

function fac(){
  if(btnonc2==true){
   screen='';
   index=0;
   delet=[''];
   num1= 0;
   num2= 0;
   num1fordelet =[''];
   num2fordelet =[''];
  
   click=0;
   procssingl=[''];
   index2=0;
   history2 +='('+numprocs+') '+ history1+'.\n';
   numprocs++;
   history1='';
   document.getElementById("div-in") .innerHTML='.0';
   document.getElementById("history") .innerHTML=history2;
   document.getElementById("screenresult").innerHTML=screen;
  }
}

function print (){
  document.getElementById("history") .innerHTML=history1;
    document.getElementById("div-in") .innerHTML=screen;
}

function fdelet (){
  if(btnonc2==true){
    index--;
    if(delet[index]==7){
      if(click==0 )
        num1 =num1/10 -0.7;
      if(click==1){
        num2 =num2/10 -0.7;
        alert("num1 "+num1+"\nnum2 "+num2+"\n"+procssingl[index2]);
        fprocs();
      }
    }
    if(delet[index]==8){
      if(click==0 )
        num1 =num1/10 -0.8;
      if(click==1){
        num2 =num2/10 -0.8;
        alert("num1 "+num1+"\nnum2 "+num2+"\n"+procssingl[index2]);
        fprocs();
      }
    }
    if(delet[index]==9){
      if(click==0)
        num1 =num1/10 -0.9;
      if(click==1 ){
        num2 =num2/10 -0.9;
        alert("num1 "+num1+"\nnum2 "+num2+"\n"+procssingl[index2]);
        fprocs();
      }
    }
    if(delet[index]==' / '||delet[index]==' % '){
      click--;
      index2--;
      procssingl.pop();
      if(num2==0){
        num1=num1fordelet[num1fordelet.length-2];
        num2=num2fordelet[num2fordelet.length-1];
      }
      num1fordelet.pop();
      if(index2 == -1)
        num2=0;
      alert("num1 "+num1+"\nnum2 "+num2+"\n"+procssingl[index2]);
      fprocs();
  //    if (num2 != 0)
    //    fprocs();
    }
    delet.pop();
    if(index>0) {
      screen = '';
      history1 = '';
      for (var i = 0 ; i < index ; i++) {
        screen += delet[i];
        history1 += delet[i]; 
      }
      print();
    }
    if(index<=0)
      fac(); 
  }
}

function fclean (){
  numprocs=0;
  history1='';
  history2='';
  document.getElementById("history") .innerHTML=history1;
}

btnon.addEventListener("click",fon);
btnac.addEventListener("click",fac);
btndelet.addEventListener("click",fdelet);
btnclean.addEventListener("click",fclean);
/*   done   */

/*   اسطر الثاني    */

function fprocs (){
  if(btnonc2==true){
    if(procssingl[index2] == ' / '){
      result = num1 / num2;
    }
    else if(procssingl[index2] == ' % '){
      result = num1 % num2;
    }
    document.getElementById("screenresult").innerHTML=result;
  }
}

function fbtn7 (){
  if(btnonc2==true){
    delet[index]=7;
    index++;
    screen += '7';
    history1 += '7';
    print();
  }
  if (click==0){
     if(num1==0) 
      num1 = 7;
     else
      num1 = num1 *10 + 7;
  }
  if(click==1){
    if(num2==0) {
      num2 = 7;
      alert("num1 "+num1+"\nnum2 "+num2+"\n"+procssingl[index2]);
      fprocs();
    }
    else {
      num2 = num2 *10 + 7;
      alert("num1 "+num1+"\nnum2 "+num2+"\n"+procssingl[index2]);
      fprocs();
    }
  }
}

function fbtn8 (){
  if(btnonc2==true){
    delet[index]=8;
    index++;
    screen += '8' ;
    history1 += '8';
    print();
  }
  if (click==0) {
    if(num1==0)
      num1 = 8;
    else
      num1 = num1 *10 + 8;
  }
  if (click==1) {
    if(num2==0) {
      num2 = 8;
      alert("num1 "+num1+"\nnum2 "+num2+"\n"+procssingl[index2]);
      fprocs();
    }
    else {
      num2 = num2 *10 + 8;
      alert("num1 "+num1+"\nnum2 "+num2+"\n"+procssingl[index2]);
      fprocs();
    }
  }
}

function fbtn9 (){
  if(btnonc2==true){
    delet[index]=9;
    index++;
    screen += '9' ;
    history1 += '9';
    print();}
  if (click==0) {
    if(num1==0)
      num1 = 9;
    else
      num1 = num1 *10 + 9;
  }
  if (click==1) {
    if(num2==0) {
      num2 = 9;
      alert("num1 "+num1+"\nnum2 "+num2+"\n"+procssingl[index2]);
      fprocs();
    }
    else {
      num2 = num2 *10 + 9;
      alert("num1 "+num1+"\nnum2 "+num2+"\n"+procssingl[index2]);
      fprocs();
    }
  }
}

function fdivi (){
  if(btnonc2==true){
    delet[index]=' / ';
    index++;
    index2++;
    procssingl[index2]=' / ';
    screen +=' / ' ;
    history1 +=' / ' ;
    click++;
    if(click==2){
      
      num1fordelet.push(num1);
      num2fordelet.push(num2);
      num1=result;
      num2=0;
    
      num1fordelet.push(num1);
      click--;
    }
    print();
  }
}

function fhandred (){
  if(btnonc2==true){
    delet[index]=' % ';
    index++;
    index2++;
    procssingl[index2]= ' % ';
    click++;
    screen +=' % ' ;
    history1 +=' % ' ;
    if(click==2){
      
      num1fordelet.push(num1);
      num2fordelet.push(num2);
      num1=result;
      num2=0;
      num1fordelet.push(num1);
      click--;
    }
    print();
  }
}

btn7.addEventListener("click",fbtn7);
btn8.addEventListener("click",fbtn8);
btn9.addEventListener("click",fbtn9);
divi.addEventListener("click",fdivi);
handred.addEventListener("click",fhandred);
/*  done  */

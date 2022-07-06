/*
var blockroom = document.querySelector(".blockroom");
var inrgmblock = document.querySelectorAll(".inrgmblock");
*/
var blockroom = document.querySelector(".blockroom");
var scWidth=window.outerWidth,scHeight=window.outerHeight,len=40,tt1=200;
var height=Math.floor(scHeight/len)+3,width=Math.floor(scWidth/len)+2;
// var height=5,width=8,len=40,tt1=200;
var boxArr=[],boxCnt=0,a1Arr=[],a2Arr=[],a3Arr=[],a4Arr=[],aniCnt1=0,aniCnt2=0;
createBlocks();
function createBlocks(){
  blockroom.style.height = height*len + "px";
  blockroom.style.width = width*len + "px";
  var a,b,c,d,e;
  for(a=0;a<height;a++){
    for(b=0;b<width;b++){
      boxArr[boxCnt] = document.createElement('div');
      // boxArr[boxCnt].innerHTML = boxCnt;
      boxArr[boxCnt].style.height = len + "px";
      boxArr[boxCnt].style.width = len + "px";
      boxArr[boxCnt].style.border = "1px solid #000";
      boxArr[boxCnt].style.position = "absolute";
      boxArr[boxCnt].style.background = "#" + "00C851";
      boxArr[boxCnt].style.display = "flex";
      boxArr[boxCnt].style.justifyContent = "center";
      boxArr[boxCnt].style.alignItems = "center";
      boxArr[boxCnt].style.top = len*a-a + "px";
      boxArr[boxCnt].style.left = len*b-b + "px";
      a3Arr[boxCnt] = len*a-a;
      a4Arr[boxCnt] = len*b-b;
      blockroom.appendChild(boxArr[boxCnt]);
      boxCnt++;
    }
  }
  createArr();
}

function createArr(){
  var a,b,c=1,d,e,f,g,h=height;i=[],j=0,k=0,l=0,m=[],n=0,w=width,str1="",str2="";
  for(a=0;a<h+w-1;a++){
    d=(a<h?a+1:h);e=(a>w-1?++e:0);f=[];g=0;m=[];n=0;str1=str2="";
    for(b=e;b<d;b++){str1=str1+""+b;f[g]=b;g++;}
    for(j=k;j>=l;j--){str2=str2+j;m[n]=j;n++;}
    // console.table((a<10)?"0"+a:""+a,str2,(str1.length<4?"\t":""),"\t",str1);
    k=(k<w-1?++k:k);l=(a<h-1?0:++l);a1Arr[a]=f;a2Arr[a]=m,c=a>8?++c:c;
  }
  console.log(a1Arr,a2Arr);
  reSuffelBox1();
  setTimeout(()=>{reSuffelBox2();},tt1);
}
function reSuffelBox1(){
  var a,b,c;
  if(aniCnt1<a1Arr.length){
    for(a=0;a<a1Arr[aniCnt1].length;a++){
    // for(a=a1Arr[aniCnt1].length-1;a>=0;a--){
      b=a2Arr[aniCnt1][a]+a1Arr[aniCnt1][a]*width;
      boxArr[b].style.background = "#ff4444";
      boxArr[b].style.top = a3Arr[b]-10 + "px";
      boxArr[b].style.left = a4Arr[b]-10 + "px";
    }
    aniCnt1++;
    setTimeout(()=>{reSuffelBox1();},tt1);
  }
}
function reSuffelBox2(){
  var a,b,c;
  if(aniCnt1<a1Arr.length){
    for(a=0;a<a1Arr[aniCnt2].length;a++){
    // for(a=a1Arr[aniCnt1].length-1;a>=0;a--){
      b=a2Arr[aniCnt2][a]+a1Arr[aniCnt2][a]*width;
      // boxArr[b].style.background = "#f00";
      boxArr[b].style.background = "#33b5e5";
      boxArr[b].style.top = a3Arr[b] + "px";
      boxArr[b].style.left = a4Arr[b] + "px";
    }
    aniCnt2++;
    setTimeout(()=>{reSuffelBox2();},tt1);
  }
}
/*
var blockroom = document.querySelector(".blockroom");
var inrgmblock = document.querySelectorAll(".inrgmblock");
function boxgenerator(){
  var lenh=100,lenw=100,lent=0,lenl=100;
  boxx1[widthx1] = document.createElement('div');
  boxx1[widthx1].innerHTML = "CAT";
  boxx1[widthx1].style.height = lenh + "px";
  boxx1[widthx1].style.width = lenw + "px";
  boxx1[widthx1].style.border = "1px solid #000";
  boxx1[widthx1].style.position = "absolute";
  boxx1[widthx1].style.display = "flex";
  boxx1[widthx1].style.justifyContent = "center";
  boxx1[widthx1].style.alignItems = "center";
  boxx1[widthx1].style.top = lent + "px";
  boxx1[widthx1].style.left = lenl + "px";
  boxgenerator.appendChild(boxx1[widthx1]);
}
function boxgenerator(){
  boxx1[widthx1] = document.createElement('div');
  boxx1[widthx1].innerHTML = "CAT";
  boxx1[widthx1].style.height = lenh + "px";
  boxx1[widthx1].style.width = lenw + "px";
  boxx1[widthx1].style.border = "1px solid #000";
  boxx1[widthx1].style.position = "absolute";
  boxx1[widthx1].style.display = "flex";
  boxx1[widthx1].style.justifyContent = "center";
  boxx1[widthx1].style.alignItems = "center";
  boxx1[widthx1].style.top = lent + "px";
  boxx1[widthx1].style.left = lenl + "px";
  boxx1[widthx1].setAttribute('class', 'boxbtn');
  boxgenerator.appendChild(boxx1[widthx1]);
}
document.addEventListener('keydown',function(event){
  W=87,A=65,S=83,D=68,K=75,L=76,SPACE=32,ENTER=13
  if(event.keyCode == 87){//W
  }
  else if(event.keyCode == 65){//A
  }
});
Math.random() * (max - min) + min;
b = Math.floor(Math.random()*(8-2)+2);
src="js/script.js"
*/
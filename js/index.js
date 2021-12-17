//轮播图
/*需求
1.点击按钮实现图片切换  按钮背景颜色改变
2.点击左右侧按钮实现图片切换
3.自动轮播
4.鼠标移入轮播图中时，自动轮播停止
5.使用opacity实现轮播图淡入淡出
*/
var contariner=document.querySelector('.carousel-inner');
var pic=contariner.children;

var Bth=document.querySelector('.carousel-btn');
var aBth=Bth.children;
var prev=document.querySelector('.prev');
var next=document.querySelector('.next');
// console.log(next)
// console.log(contariner,pic,Bth,prev,next);
//1.点击按钮切换图片 改变按钮背景色
function picSwitching(){
    for(var i=0;i<aBth.length;i++){
       aBth[i].setAttribute('index',i)
        aBth[i].onclick=function(){
        var index=this.getAttribute('index')
        num=index
        
       for (var j=0;j<aBth.length;j++){
        aBth[j].className=''
        pic[j].style.display='none'
        pic[j].style.opacity='0.5'
        }
        this.className='active'
        pic[index].style.display='block'
        pic[index].style.opacity='1'
        
        
        }
 }
                                                                                                                                                                
}
picSwitching()
// 2.点击左右侧按钮实现图片切换
var num=0

next.onclick=function(){
 num++

 if(num>pic.length-1){
     num=0
    
 }
for (var j=0;j<aBth.length;j++){
    aBth[j].className=''
    pic[j].style.display='none'
    }
    aBth[num].className='active'
    pic[num].style.display='block'
}
prev.onclick=function(){
    num--
   
    if(num<0){
        num=pic.length-1
        
    }
   for (var j=0;j<aBth.length;j++){
       aBth[j].className=''
       pic[j].style.display='none'
       }
       aBth[num].className='active'
       pic[num].style.display='block '
    
} 
var timer=null
function auto(){
    timer=setInterval(function(){
        next.onclick();
    },3000)
   
}  
auto()
//当鼠标移入到swiper容器里面的时候让自动轮播停止
//为什么要追加到父元素身上才能实现停止效果 contariner没有高度
contariner.parentNode.onmouseover = function(){
    clearInterval(timer)
}
contariner.parentNode.onmouseout = function(){
    auto()
}
//倒计时
// var clock=document.querySelector('.clock')
var hour=document.querySelector('.hour')
var minute=document.querySelector('.minute')
var second=document.querySelector('.second')
console.log(hour,minute,second)
var endDate=new Date('2021/12/31 00:00:00')
djs()
setInterval(djs,1000)
function djs(){
    var nowDate=new Date()
    //总秒数
    var seconds=parseInt((endDate.getTime()-nowDate.getTime())/1000)
    //天数
    // var d=complement(parseInt(seconds/3600/24))
    //小时
    var h=complement(parseInt(seconds/3600%24))
    //分钟
    var m=complement(parseInt(seconds/60%60))
    //秒
    var s=complement(parseInt(seconds%60))
    // console.log(h, m,s)
    hour.innerHTML=h
    minute.innerHTML=m
    second.innerHTML=s
    
}
function complement(num){
    return num < 10 ? num = '0' + num : num
}



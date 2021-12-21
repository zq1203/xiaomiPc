//商品轮播图样式
var contariner=document.querySelector('#slider');
var pic=contariner.children;
var Bth=document.querySelector("#pagination-wrap ul");
var aBth=Bth.children;
var prev=document.querySelector('#previous');
var next=document.querySelector('#next');
// console.log(contariner,pic,Bth,aBth,prev,next)
//根据图片追加按钮
function setBth(){
    for(var i=0;i<pic.length;i++){
        var li=document.createElement('li');
        Bth.appendChild(li);
    }
}
setBth()
//点击左右侧按钮实现图片切换
//问题:next&prev按钮不出现
var num=0
next.onclick=function(){
    num++
    if(num>pic.length-1){
    num=0
    }
    for(var j=0;j<aBth.length;j++){
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
    for(var j=0;j<aBth.length;j++){
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
    },2000)
}
auto()
contariner.parentNode.onmouseover = function(){
    clearInterval(timer)
}
contariner.parentNode.onmouseout = function(){
    auto()
}

//轮播图右侧页面的实现
// 选择颜色
var Color=document.querySelectorAll('.Color');
var Edition=document.querySelectorAll('.edition');
// console.log(Color[0].innerHTML,Edition)
for(var i=0;i<Color.length;i++){
    Color[i].onclick=function(){
        for(var j=0;j<Color.length;j++){
            Color[j].className='';
        }
        this.className='color';
}
}
for(var i=0;i<Edition.length;i++){
    Edition[i].onclick=function(){
        for(var j=0;j<Edition.length;j++){
            Edition[j].className='';
        }
        this.className='color';
}
}
var CartGoods=document.querySelectorAll('.buy-box1 button');
// console.log(CartGoods)
//取选定状态为红色的span的innerHtml contains() 方法用于判断字符串中是否包含指定的字符或字符串。
// getCartGoods[0].onclick=function(){
//    var goodsVal=Color[num].innerHTML
//     console.log(goodsVal)
//     var goodsEditionVal=Edition[num].innerHTML
//     console.log(goodsEditionVal)
// }

CartGoods[1].onclick=function(){
    // console.log(getCartGoods[1].className)
    if(this.className=='buy-like'){
        this.className='likeColor'
    }else{
        this.className='buy-like'
    }
  
}
//取选定状态为红色的span的innerHtml classname=color
CartGoods[0].onclick=function getGoods(){
    let goodsName=document.querySelector('.getbuy-middle-box1 h3')
    let selectColor=document.querySelector('.getbuy-middle-box2 .color')
    let selectEdition=document.querySelector('.getbuy-middle-box3 .color')
    // console.log(selectColor.innerHTML,selectEdition.innerHTML,goodsName.innerHTML)
    let data =axios.get('http://localhost:3000/goods?name='+goodsName).then((data)=>{
       console.log(data)
     
       
   })
}       
    
       
       
      
    
    







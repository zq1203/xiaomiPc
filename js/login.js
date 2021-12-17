/*
登录的实现
1.用户名：邮箱手机号小米ID  密码：格式是否正确,提示信息
2.ajax发送到后端验证信息是否正确
3.后端返回信息后，登录
*/
var tel=document.querySelector('.txt');
var Psw=document.querySelector('.txt1');
var sub=document.querySelector('.txt2')
var Tips1=document.querySelector('.tips1');
var Tips2=document.querySelector('.tips2');
// console.log(tel,Tips,Psw,sub)
var telReg = /^1[3-9]\d{9}$/;
var pswReg =/[1-9]\d{4,10}/;
// var email= '[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z0-9]+';
//用户名验证
tel.onfous=()=>{
    Tips1.innerHTML='请输入账号'
    Tips1.className= 'sy1'
}
tel.onblur=()=>{
    if(telReg.test(tel.value)){
        Tips1.innerHTML='账号格式输入正确' 
        Tips1.className= 'sy3'  
    }else{
        Tips1.innerHTML='账号格式不正确' 
        Tips1.className= 'sy2'
    }
}
//密码验证
Psw.onfous=()=>{
    Tips2.innerHTML='请输入密码'
    Tips2.className= 'sy1'
}
Psw.onblur=()=>{
    if(pswReg.test(Psw.value)){
        Tips2.innerHTML='密码格式输入正确' 
        Tips2.className= 'sy3'  
    }else{
        Tips2.innerHTML='密码格式不正确' 
        Tips2.className= 'sy2'
    }
}
sub.onclick=function(){
  if(( Tips2.className=='sy3') && (Tips1.className=='sy3' )){
    //   console.log(1111)
    var Tval=tel.value;
    var Pval=Psw.value;
    console.log(Tval,Pval)
    
  }else{
      return
  }
    
  
}
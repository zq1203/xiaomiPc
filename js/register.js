/*注册页面的实现
1.用户名 密码 确认密码格式是否正确
2.比对两次密码是否一致
3.输入用户名后失去焦点发送ajax请求是否有同一用户名存在，提示
4.密码输入完成后再次发送请求，将数据存储在数据库，提示
*/
/* 问题
1.输入为空时，提示请输入账号
*/
var tel=document.querySelectorAll('.txt1');
var sub=document.querySelector('.txt2');
var tips=document.querySelectorAll('span')
// console.log(tel[1],sub)
var telReg = /^1[3-9]\d{9}$/;
var pswReg =/[1-9]\d{4,10}/;
//用户名验证
// tel[0].onfous=()=>{
//     // console.log(tel[0].value)
//     // if(tel[0].value='')
//         tips[0].innerHTML='请输入账号'
//         tips[0].className= 'sy1'
//     }

tel[0].addEventListener('blur',fn)
function fn(){
    if(telReg.test(tel[0].value)){
        tips[0].innerHTML='账号格式输入正确'
        tips[0].className="sy3"
    }else{
        tips[0].innerHTML='账号格式不正确'
        tips[0].className="sy2"
    }
}
tel[1].onblur=()=>{
    if(pswReg.test(tel[1].value)){
        tips[1].innerHTML='密码格式输入正确'
        tips[1].className="sy3"
    }else{
        tips[1].innerHTML='密码格式不正确'
        tips[1].className="sy2"
    }
}
tel[2].onblur=()=>{
    if(tel[2].value==tel[1].value){
        tips[2].innerHTML="两次密码输入一致"
        tips[2].className="sy3"
    }else{
        tips[2].innerHTML="两次密码输入不一致"
        tips[2].className="sy2"
    }
}
//失去焦点验证用户名
tel[0].addEventListener('blur',fnAjax)
function fnAjax(){
    if( tips[0].className=='sy3'){
        // console.log()
    let res=axios.get('http://localhost:3000/userinfo?userAccount='+tel[0].value).then(({data})=>{
        // console.log(data)
        if(data.length==0){
            alert('真是个好名字呢')
          
        }else{
            alert('抱歉，这个用户名太火爆了，请换个名字呢')
        }
        
    })
    }
    }
//点击注册账号，储存用户信息
sub.onclick=function (){
        if(( tips[0].className=='sy3') &&( tips[1].className=='sy3') &&( tips[2].className=='sy3') ){
        let res=axios.post('http://localhost:3000/userinfo',{
            userAccount:tel[0].value,
            password:tel[1].value
        }).then((res)=>{
            location.href='file:///D:/phpStudy/PHPTutorial/WWW/xiaoMiPc/html/index1.html'
            // alert('注册成功啦')
            //  let userDate=res.data;
            //  console.log(userDate)
            //  console.log(userDate.userAccount)
         })
        }
        }

<?php
// 接收get参数
$name = $_GET['name'];
// echo $name;
$arr = ['17761405873 ','17125874522','1234567889'];
// in_array()  查找元素是否在数组中
if(in_array($name,$arr)){ // 存在
  echo 1;
}else{
  echo 2;
}
?>
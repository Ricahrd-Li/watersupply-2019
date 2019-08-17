// import { isNumber } from "util"; --> not work
var currentNumEast = 10;
var currentNumWest = 15;
var currentNumMid = 0;

function summitNumEast(){
    // document.getElementById("numEast").innerHTML = "hi";
    var numEast = document.getElementById("numEast").value;
    // if (typeof(numEast)!="number") alert("错误！缺水数应当是数字！");
    alert(numEast +"(东区) 提交成功");
}
function summitNumWast(){
    var numWest = document.getElementById("numWest").value;
    alert(numWest +"(西区) 提交成功");
}
function summitNumMiddle(){
    var numMid = document.getElementById("numMid").value;
    alert(numMid +"(中区) 提交成功");
}
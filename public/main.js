// import { isNumber } from "util"; --> not work

function summitNumEast(){
    // document.getElementById("numEast").innerHTML = "hi";
    var numEast = document.getElementById("numEast").value;
    // if (typeof(numEast)!="number") alert("错误！缺水数应当是数字！");
    alert(numEast +" 提交成功");
}
function summitNumWast(){
    var numWest = document.getElementById("numWest").value;
    alert("提交成功");
}
function summitNumMiddle(){
    var numMiddle = document.getElementById("numMiddle").value;
    alert("提交成功");
}
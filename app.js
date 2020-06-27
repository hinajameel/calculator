function getNumber(num){
    // console.log()
    var result=document.getElementById("result");
    result.value +=num;//+ is for concatination 334=prev+new
}
function clearInput(){
    var result=document.getElementById("result");
    result.value ="";
}
function getResult(){
    var result=document.getElementById("result");
    //console.log(result)
    result.value =eval(result.value);
}
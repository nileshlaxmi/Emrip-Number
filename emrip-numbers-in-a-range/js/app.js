const clickFunction = () => {
    let str = $("#ipText").val();
    let revStr = str.split("").reverse().join("");
    let revNum = parseInt(revStr);
    let num = parseInt(str);
    let c1 = 0, c2 = 0 , i = 0;

    for(i=1; i<=num; i++){
        if(num%i === 0){
            c1++;
        }
    }

    for(i=1; i<=revNum; i++){
        if(revNum%i === 0){
            c2++;
        }
    }

    if(c1 === 2 && c2 === 2){
        $("#opText").text("Emrip Number");
    }
    else{
        $("#opText").text("Not an Emrip Number");
    }
}

function clearFields(){
    document.getElementById('ipText').value = "";
    document.getElementById('opText').innerHTML = "";
}

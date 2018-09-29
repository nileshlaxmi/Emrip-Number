const clickFunction = () => {
    var str = $("#ipText").val();
    var num = parseInt(str);
    
    let  i = 0, j=0;

    for(j=1; j<=num; j++){
        var revStr = j.toString();
        var revString = revStr.split("").reverse().join("");
        var revNum = parseInt(revString);

        var c1 = 0, c2 = 0;
        for(i=1; i<=j; i++){
            if(j%i === 0){
                c1++;
            }
        }

        for(i=1; i<=revNum; i++){
            if(revNum%i === 0){
                c2++;
            }
        }

        if(c1 === 2 && c2 === 2){
            console.log("Emrip number", j);
            console.log("Reverse number", revNum);
            // document.getElementById('opText').innerHTML = "Emrip Numbers "+ j+ "<br/> Reverse Number "+revNum;
            var para = document.createElement("p");
            para.innerHTML = "Emrip Numbers "+ j+ "<br/> Reverse Number "+revNum;
            document.getElementById('opText').appendChild(para);
        }
    }
    
    
}

function clearFields(){
    document.getElementById('ipText').value = "";
    document.getElementById('opText').innerHTML = "";
}

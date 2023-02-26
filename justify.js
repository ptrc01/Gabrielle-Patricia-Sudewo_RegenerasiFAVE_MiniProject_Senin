document.getElementById("form").addEventListener("submit", function (e){
    e.preventDefault();
    let inputName = document.getElementById("inputNama");
    let ValNama= inputName.value;

    let inputEmail = document.getElementById("inputEmail");
    let ValEmail = inputEmail.value;

    let inputMessage = document.getElementById("inputMessage");
    let ValMess = inputMessage.value;
    let space = 0;
    let flag = -1;

    if (ValNama.length >= 3) {
        console.log(ValNama);
        flag=1;
    }else{
        document.getElementById("name").innerText = "Please input your name";
        return false;
    }

    if (ValEmail.indexOf("@") != -1 && ValEmail.indexOf(".com") != -1) {
        console.log(ValEmail);
        flag=1;
    }else{
        document.getElementById("email").innerText = "Please input your correct email";
        return false;
    }

    for (let index = 0; index < ValMess.length; index++) {
        if (ValMess[index]==" ") {
            space++;
            if (space >= 2) {
                console.log(ValMess);
                flag =1;
            }
            
        }

        if (index == ValMess.length-1 && space <2){
            
            document.getElementById("mess").innerText = "Please input your message again";
            return false;
            
        }
    }

    if (flag==1) {
        document.getElementById("form").submit();
    }
    
});
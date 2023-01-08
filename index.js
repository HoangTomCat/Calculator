/*Khai báo*/
let a = "";
let b = "";
let myArray = [];
let value = null;
let signalOfAdd = false;
let signalOfEqual = false;
let trackIndex;
let error = false;
const operation = document.getElementById("display-operation");
const number = document.getElementById("display-number");
const addButton = document.getElementById("add");
const subButton = document.getElementById("subtract");
const multiButton = document.getElementById("multiply");
const divideButton = document.getElementById("divide");
const resetButton = document.getElementById("reset");
const equalButton = document.getElementById("equal");
const one = document.getElementById("one");
const two = document.getElementById("two");
const float = document.getElementById("float");
/*Hiển thị*/
operation.innerHTML = "Dấu : Không có";
number.innerHTML = ""
/*Chức năng */
function checkOperation(myArray){
    for(let i = 0;i<myArray.length;i+=1){
        if(myArray[0]!=="+"){
            switch (myArray[i]){
                case "+":
                    signalOfAdd = true;
                    break;
                default:
                    break;
            }
        }
        if(myArray[0]==="+"){
            alert("Chưa nhập số trước khi tính !!!");
            error = true;
            break;
        }
    }
}
function checkElement(myArray){
    let counterAdd = 0;
    myArray.forEach(function(element){
        if(element == "+"){
            counterAdd+=1;
        }
    });
    if(counterAdd>1){
        return true;
    }
    return false;
}
/*Phép Cộng*/
addButton.addEventListener("click",function(){
    checkOperation(myArray); //kiểm tra xem mảng có dấu + không ?
    if(signalOfAdd === false){ // nếu trước đó trong mảng chưa có dấu +
        if(a===""){ // nếu a chưa có giá trị
            a = myArray.join(''); // gán phần tử a số trước đó
            a = Number(a); // nếu nhập dấu trước thì hàm Number() sẽ trả về NaN (Not a Number)
        }
        myArray.push("+"); // thêm dấu +
        checkOperation(myArray); //check khi đã nhập dấu
        trackIndex = myArray.length; // thêm đánh dấu cho phần tử b
        // console.log(`a:${a}`);
        console.log(` error : ${error}`);
        if(error === true){ //nếu nhập số cộng ở phía trước
            a = ""; //reset vì a đang ở trạng thái not a number
            myArray = [];
            error = false;
        }
        console.log(myArray);
    }
    else{ //signOfAdd === true
        for(let i=trackIndex;i<myArray.length;i+=1){
            b = b + myArray[i];
        }
        b = Number(b);
        if(Number(b)){ //nếu là số thì trả về true
            a = a + b;
            console.log(`b:${b}`);
            b = "";
            myArray = [];
            myArray.push(String(a));
        }
        myArray.push("+");
        if(checkElement(myArray) === false){ //kiểm tra xem có nhập dấu cộng nhiều lần hay không ?
            // signalOfAdd = false; // do signOfAdd vẫn trả về là true nên không cần
        }
        else{
            alert("Chưa nhập số khi tính");
            myArray.pop(); //loại bỏ phần tử spam dấu cộng ở cuối
        }
        console.log(myArray);
    }
})

one.addEventListener("click",function(){
    number.innerHTML = number.innerHTML + "1"; //hiển thị số
    myArray.push("1");
    console.log(myArray);
})

two.addEventListener("click",function(){
    number.innerHTML = number.innerHTML + "2"; //hiển thị số
    myArray.push("2");
    console.log(myArray);
})
float.addEventListener("click",function(){
    number.innerHTML = number.innerHTML + "."; //hiển thị số
    myArray.push(".");
})

/*
*/





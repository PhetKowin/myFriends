var numOfFriend = Math.floor(Math.random() * 9) + 1;
var form = document.getElementById("form");
const friendAge = [];
const friendNickname = [];
var validate = true;
document.getElementById("numOfFriend").innerHTML = "Please enter " + numOfFriend + " of your friend information";
for (let i = 1; i <= numOfFriend; i++) {
    form.innerHTML = form.innerHTML + "<br>" + i + ". " + "<label for=\"nickname" + i + "\"> Nickname: </label>" + "<input type=\"text\" id=\"nickname" + i + "\" value=\"\" required>"
        + "<label for=\"age" + i + "\" class=\"age\"> Age: </label>" + "<input type=\"number\" id=\"age" + i + "\" value=\"\" required><br><br>";
}
function totalAge() {
    let totalAge = 0;
    validateForm();
    for (let i = 1; i <= numOfFriend; i++) {
        let age = document.getElementById("age" + i).value;
        totalAge = totalAge + Number(age);
    }
    if(validate == true){
    alert("Total Age = " + totalAge);
    }
}
function averageAge() {
    let totalAge = 0;
    let averageAge;
    validateForm();
    for (let i = 1; i <= numOfFriend; i++) {
        let age = document.getElementById("age" + i).value;
        totalAge = totalAge + Number(age);
    }
    averageAge = totalAge / numOfFriend;
    if(validate == true){
    alert("Average Age = " + averageAge);
    }
}
function lowestAge() {
    let friendNickname = [];
    var lowestAge;
    validateForm();
    for (let i = 1; i <= numOfFriend; i++) {
        let age = document.getElementById("age" + i).value;
        if (i == 1) {
            lowestAge = age;
        }
        else if (lowestAge >= age) {
            lowestAge = age;
        }
    }
    for (let i = 1; i <= numOfFriend; i++) {
        let age = document.getElementById("age" + i).value;
        let nickname = document.getElementById("nickname" + i).value;
        if (lowestAge == age) {
            friendNickname.push(nickname);
        }
    }
    if(validate == true){
    alert("Lowest Age = " + lowestAge + "\nNickname = " + friendNickname.toString());
    }
}
function highestAge() {
    let friendNickname = [];
    var highestAge;
    validateForm();
    for (let i = 1; i <= numOfFriend; i++) {
        let age = document.getElementById("age" + i).value;
        if (i == 1) {
            highestAge = age;
        }
        else if (highestAge <= age) {
            highestAge = age;
        }
    }
    for (let i = 1; i <= numOfFriend; i++) {
        let age = document.getElementById("age" + i).value;
        let nickname = document.getElementById("nickname" + i).value;
        if (highestAge == age) {
            friendNickname.push(nickname);
        }
    }
    if(validate == true){
    alert("Highest Age = " + highestAge + "\nNickname = " + friendNickname.toString());
    }
}
function validateForm() {
    for (let i = 1; i <= numOfFriend; i++) {
        if(document.getElementById("age" + i).value == "" || document.getElementById("nickname" + i).value == ""){
            validate = false;
            alert("Please fill input " + i);
            break;
        }
        validate = true;
    }
}
function Clear() {
    location.reload();
}
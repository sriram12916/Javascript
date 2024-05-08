 regforms= document.getElementById("regform");

regforms.addEventListener('submit',(event) => {
   event.preventDefault();
    validInputs();
    
})


function validInputs() {
    var result = true;
    var username = document.getElementById("uname").value;
    if (username == "") {
        document.getElementById("set1").innerHTML = "*Required!";
        result = false;
    }
    else {
        document.getElementById("set1").innerHTML = "";
    }
    console.log(username)

    
    var youremail = document.getElementById("email").value;
    let valid = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (youremail == "") {
        document.getElementById("set2").innerHTML = "*Required!"
        result = false;
    }
    else if (!valid.test(youremail)) {
        document.getElementById("set2").innerHTML = "enter correct format email"
        result = false;
    }
    else {
        document.getElementById("set2").innerHTML = ""
    }
    console.log(youremail)


var gender = document.querySelector('input[name="gender"]:checked')
if(gender == null ){
        document.getElementById("set3").innerHTML = "*Required!"
        result = false;
    }
     else{
        document.getElementById("set3").innerHTML = ""
     }


//        var male = document.getElementById("male").value;
//        var female = document.getElementById("female").value;
//        var others = document.getElementById("others").value;

//        var genderchecked = false;

//        if(male.checked){
//         genderchecked = true;
//        }
//        else if(female.checked){
//         genderchecked = true;
//        }
//        else if(others.checked){
//         genderchecked = true;
//        }
// if(genderchecked){
//     document.getElementById("set3").innerHTML = ""
// }
// else{
//     document.getElementById("set3").innerHTML = "*Required!"
// }


    var phonenumber = document.getElementById("phonenumber").value;
    if (phonenumber == "") {
        document.getElementById("set4").innerHTML = "*Required!"
        result = false;
    }
    else {
        document.getElementById("set4").innerHTML = ""
    }
    console.log(gender)


    var dateofbirth = document.getElementById("dob").value;
    if (dateofbirth == "") {
        document.getElementById("set5").innerHTML = "*Required!"
        result = false;
    }
    else {
        document.getElementById("set5").innerHTML = ""
    }
    console.log(dateofbirth)


    var nationality = document.getElementById("nationality").value;
    if (nationality == "") {
        document.getElementById("set6").innerHTML = "*Required!"
        result = false;
    }
    else {
        document.getElementById("set6").innerHTML = ""
    }
    console.log(nationality)


    var degree = document.getElementById("degree").value;
    if (degree == "") {
        document.getElementById("set7").innerHTML = "*Required!"
        result = false;
    }
    else {
        document.getElementById("set7").innerHTML = ""
    }
    console.log(degree)


    var branch = document.getElementById("branch").value;
    if (branch == "") {
        document.getElementById("set8").innerHTML = "*Required!"
        result = false;
    }
    else {
        document.getElementById("set8").innerHTML = ""
    }
    console.log(branch)


    var year = document.getElementById("year").value;
    if (year == "") {
        document.getElementById("set9").innerHTML = "*Required!"
        result = false;
    }
    else {
        document.getElementById("set9").innerHTML = ""
    }
    console.log(year)


    var semester = document.getElementById("semester").value;
    if (semester == "") {
        document.getElementById("set10").innerHTML = "*Required!"
        result = false;
    }
    else {
        document.getElementById("set10").innerHTML = ""
    }
    console.log(semester)


    var admission = document.getElementById("admission").value;
    if (admission == "") {
        document.getElementById("set11").innerHTML = "*Required!"
        result = false;
    }
    else {
        document.getElementById("set11").innerHTML = ""
    }
    console.log(admission)


     var language = document.querySelector('input[name="language"]:checked');

    if (language == null) {
        document.getElementById("set12").innerHTML = "*Required!"
        result = false;
    }
    else {
        document.getElementById("set12").innerHTML = ""
    }
    console.log(language)


    var fathername = document.getElementById("fname").value;
    if (fathername == "") {
        document.getElementById("set13").innerHTML = "*Required!"
        result = false;
    }
    else {
        document.getElementById("set13").innerHTML = ""
    }
    console.log(fathername)


    var fatheroccupation = document.getElementById("foccupation").value;
    if (fatheroccupation == "") {
        document.getElementById("set14").innerHTML = "*Required!"
        result = false;
    }
    else {
        document.getElementById("set14").innerHTML = ""
    }
    console.log(fatheroccupation)


    var fatherincome = document.getElementById("fincome").value;
    if (fatherincome == "") {
        document.getElementById("set15").innerHTML = "*Required!"
        result = false;
    }
    else {
        document.getElementById("set15").innerHTML = ""
    }
    console.log(fatherincome)


    var mothername = document.getElementById("mname").value;
    if (mothername == "") {
        document.getElementById("set16").innerHTML = "*Required!"
        result = false;
    }
    else {
        document.getElementById("set16").innerHTML = ""
    }
    console.log(mothername)


    var phonenum = document.getElementById("pnum").value;
    if (phonenum == "") {
        document.getElementById("set17").innerHTML = "*Required!"
        result = false;
    }
    else {
        document.getElementById("set17").innerHTML = ""
    }
    console.log(phonenum)


    var pinno = document.getElementById("pin").value;
    if (pinno == "") {
        document.getElementById("set18").innerHTML = "*Required!"
        result = false;
    }
    else {
        document.getElementById("set18").innerHTML = ""
    }
    console.log(pinno)

    
    var extraDetailInputs = document.getElementsByName("extra");
    for (var i = 0; i < extraDetailInputs.length; i++) {
        var extraDetailInput = extraDetailInputs[i];
        if (extraDetailInput.value.trim() === "") {
            extraDetailInput.nextElementSibling.textContent = "*Required!";
            result = false;
        } else {
            extraDetailInput.nextElementSibling.textContent = "";
        }
    }

if(!result){
    return;
}


    console.log(extra)

        var students = {
        name: username,
        email: youremail,
        gender: gender.value,
        phonenumber: phonenumber,
        dateofbirth: dateofbirth,
        nationality: nationality,      
        degree: degree,
        branch: branch,
        year: year,
        semester: semester,
        admission: admission,
        language: language.value,
        fathername: fathername,
        fatheroccupation: fatheroccupation,
        fatherincome: fatherincome,
        mothername: mothername,
        phonenumber2: phonenum,
        pinnumber: pinno,
        
    }
    var details = [];
    var extraDetailInputs = document.getElementsByName("extra");
    for (var i = 0; i < extraDetailInputs.length; i++) {
        var extraDetailInput = extraDetailInputs[i];
        if (extraDetailInput.value.trim() !== "") {
            details.push(extraDetailInput.value);
        }
    }
    students.extraDetailInputs = details;
 

var studentList = JSON.parse(localStorage.getItem('student'));
console.log("studentlist....."+studentList);

if( null == studentList ){
    studentList = [];
}
studentList.push(students);

 localStorage.setItem('student',JSON.stringify(studentList));
// alert("Your Form Submited Successfully")
 console.log(gender.value);
console.log(language.value);
redirectionToMainPage();

}

function redirectionToMainPage(){
    window.location.href = "index1.html";
 }

function visible(){
var newdiv = document.createElement('div')
var currentLine = `<input class="form-control" id="Extra" placeholder="Add extra details" name="extra">`
var currentLines = `<p class="error" id="set19"></p>`
var c =`<i class="fa-solid fa-trash" onclick="Delete()"></i>`
extrabox.appendChild(newdiv);
newdiv.innerHTML = currentLine+currentLines+c;

}

function Delete() {
  var extrabox = document.getElementById("extrabox");
if(extrabox.children.length>0){
 var childArray = Array.from(extrabox.children);
childArray.splice(0,1);
extrabox.innerHTML = "";
childArray.forEach(function(child) {
    extrabox.appendChild(child)
    
})

   
}

}

window.onload = function(){
    value();
} 
function value() {
    var value_link = window.location.href;
    var change = new URL(value_link);
    var datas = change.searchParams.get("id");

    if (datas) {
        var val = JSON.parse(localStorage.getItem("student"));
        document.getElementById("uname").value = val[datas].name || '';
        document.getElementById("email").value = val[datas].email || '';
        console.log('Gender Value:', val[datas].gender);
    
     
        var genderInput = document.querySelector('input[name="gender"][value="' + val[datas].gender + '"]');
        
        
    console.log('Selected Element:', genderInput);
        
        if (genderInput) {
            genderInput.checked = true;
        } else {
            console.log('No matching input element found for gender value:', val[datas].gender);
        }
        document.getElementById("phonenumber").value = val[datas].phonenumber || '';
         document.getElementById("dob").value = val[datas].dateofbirth || '';
        document.getElementById("nationality").value = val[datas].nationality || '';
        document.getElementById("degree").value = val[datas].degree || '';
        document.getElementById("branch").value = val[datas].branch || '';
        document.getElementById("year").value = val[datas].year || '';
        document.getElementById("semester").value = val[datas].semester || '';
        document.getElementById("admission").value = val[datas].admission || '';
        document.querySelector('input[name="language"][value="' + val[datas].language + '"]').checked = true;
        document.getElementById("fname").value = val[datas].fathername || '';
        document.getElementById("foccupation").value = val[datas].fatheroccupation || '';
        document.getElementById("fincome").value = val[datas].fatherincome || '';
        document.getElementById("mname").value = val[datas].mothername || '';
        document.getElementById("pnum").value = val[datas].phonenumber2 || '';
        document.getElementById("pin").value = val[datas].pinnumber || '';

        val.splice(datas, 1);
        localStorage.setItem("student", JSON.stringify(val));
    } else {
        return;
    }
}
    function displayFormData(){
        window.location.href = "index1.html"
    }



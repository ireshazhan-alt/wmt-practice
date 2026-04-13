const minAge = 18;
let students = [];

function submitForm() {
    //get input values
    let name = document.getElementById("name").value;
    let age = Number(document.getElementById("age").value);
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;

    switch(true) {
        case name === "" || email === "":
            alert("Validation failed: Empty fields");
            return false;

        case age < minAge:
            alert("Validation failed: Age below 18");
            return false;

        case phone.length !== 10:
            alert("”Validation failed: Phone number must be at least 10 digits");
            return false;

        default:
            alert("Validation successful");
    }

    //create student object
    let student = {
        name: name,
        age: age,
        email: email,
        phoneNumber:phone
    };

    //Store student
    students.push(student);

    //display students in console and alert
    console.log("Student List:");
    let message = "Student List:\n";

    for (let i = 0; i < students.length; i++) {
        let details =
        (i + 1) + ".Name: " + students[i].name +
        ", Age: " + students[i].age +
        ", Email: " + students[i].email +
        ", Phone: " + students[i].phoneNumber;
        
        console.log(details);
        message += details + "\n";
        }
        alert(message);

        //clear form
        document.getElementById("name").value ="";
        document.getElementById("age").value ="";
        document.getElementById("email").value ="";
        document.getElementById("phone").value ="";

        return false;

}
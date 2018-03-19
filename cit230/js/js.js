function sendData() {
    var save = window.confirm("Please verify all the information below is correct:\n" + "\nReason: " + document.contactform.reason.value + "\nFirst Name: " + document.contactform.firstname.value + "\nLast Name: " + document.contactform.lastname.value + "\nEmail: " + document.contactform.email.value + "\nMessage: " + document.contactform.comment.value);

    if (save === true) {
        window.alert("Message was sucessfully sent, we will process it as soon as possible.\nThank you for you time!");
    } else {
        window.alert("Data was not submitted");
    }
}

function addDate() {
    var date = (Date() + "\n\n");
    document.contactform.comment.value += date;
}

/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
    
// Close the dropdown if the user clicks outside of it
    window.onmouseleave = function (e) {
    if (!e.target.matches('.dropdown')) {
        var myDropdown = document.getElementById("myDropdown");
        if (myDropdown.classList.contains('show')) {
            myDropdown.classList.remove('show');
        }
    }
}
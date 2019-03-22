// form section script


        // $(document).ready(function() {
        //     $("#submit").click(function() {
        //         let username, phone, password;
        //         username = $("#name").val();console.log(username);
        //         phone = $("#phone").val();
        //         password = $("#password").val();
        //         $.post("https://safespacebackend.herokuapp.com/register",
        //             { username: username, password: password, phone: phone },
        //             function(data) {
        //                 if (data) {
        //                     /* alert("Your Information Has Been Saved."); */
        //                     console.log(data);
        //                 }
        //             });
        //     })

        // });

function signin() {
    document.getElementById("phonetext").style.display = "none";
    document.getElementById("phoneinput").style.display = "none";
}
function tom(data) {
    let thing =  {username: "maynard", password: "maynard", phone:3214807323}

fetch('https://safespacebackend.herokuapp.com/test007', {
 method: 'GET',
//  body: thing,
})
.then(response => response.json())
.then(response => console.log(response))
alert(`User Maynard has logged in.  You can do it! You're a winner!!`)
.catch(error => console.error(error));
}

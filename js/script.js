let userid='';
function login(){

    let username='';
    let password='';

    username = document.getElementById("username").value;
    password = document.getElementById("password").value;

    fetch('http://localhost:3000/users').then(
        response =>{
            if(response.ok){
                return response.json();
            }}).then(userResponse=>{
                let flag= false;
                userDetails = userResponse;
                userDetails.find(user =>{
                    if(username == user.username && password == user.password ){
                        userid = user.id;
                        flag =true;
                    }
                });
                if(flag){
                    window.open("./home.html");
                }
                else{
                    document.getElementById("error").innerHTML=`<div class="w-150 alert alert-danger alert-dismissible fade show" role="alert">
                    <strong>Invalid Username or Password</strong> 
                    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>`;
                }
            });
}
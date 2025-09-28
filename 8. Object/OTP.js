let otp = parseInt(Math.random()*10000);
let no = Number(prompt(`Enter The Above OTP ${otp}`));
if(otp == no){
    console.log("Login Successful");
}
else{
    console.log("Login Failed");
}
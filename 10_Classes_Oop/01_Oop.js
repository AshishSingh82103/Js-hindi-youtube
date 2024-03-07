// ------Object-literal
const user = {
    username: "Ashish",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        console.log("Got user details from database");
    }
}
console.log(user.loginCount);
console.log(user.getUserDetails());

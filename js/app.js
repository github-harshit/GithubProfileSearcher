const github = new Github;
const ui = new UI;
const submit =document.getElementById('submit');


//Adding event Listner 
submit.addEventListener('click', (e) =>{
    // Getting input from user 
    const userText= document.getElementById('searchUser').value;
  
    console.log(userText);
    if(userText!=""){
      
        //Make http call 
     github.getUser(userText).then(function(data){

         if(data.profileData.message==="Not Found"){
             //Show alert 
           ui.showAlert("User not found", "alert alert-danger");
         }else{
            
           
             ui.showProfile(data.profileData)
         }
     })
           
    }else{
       ui.clearProfile();
        }
})




var user={
    name:"",
    password:"",
    email:""
}
    

const ok=(e)=>{
  if(e.name==="name"){
      user.name=(e.value)
      }
      if(e.name==="password"){
        user.password=(e.value)
        }
        if(e.name==="email"){
            user.email=(e.value)
 }}
 

document.getElementById("btn").addEventListener("click", function(event){
    event.preventDefault()
   console.log(user)

  });
export default function Validation(data){
    let errors = {}

     const email_pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{1,4}$/;
    //const email_pattern = 
    const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/

    if(!data.email){
        errors.email = "Email required"
    }
    else if(!email_pattern.test(data.email)){ 
        errors.email = "Incorrect email"
    }
  
    if(!data.password){
        errors.password = "Password required"
    }
 
    return errors;
}


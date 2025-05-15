function validation(values) {
  let error = {};
  const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/;
  
  if(values.name === ""){
     error.name = "Name should not be empty"
  }else{
    error.name = ""
  }
  
  if(values.phoneNumber === ""){
     error.phoneNumber = "Phone Number should not be empty"
   }else{
    error.phoneNumber = ""
   }
  if(values.address === ""){
     error.address = "Address should not be empty"
  }else{
    error.address = ""
  }
 if(values.businessType === ""){
     error.businessType = "Business Type should not be empty"
  }else{
    error.businessType = ""
  }

 if (!values.email) {
    error.email = "Email should not be empty";
  } else if (!email_pattern.test(values.email)) {
    error.email = "Email format is invalid";
  }

  if (!values.password) {
    error.password = "Password should not be empty";
  } else if (!password_pattern.test(values.password)) {
    error.password = "Password must be at least 8 characters, include uppercase, lowercase and a number";
  }
  return error;
}

export default validation;

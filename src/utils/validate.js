export const checkValidate=(email,Password,name)=>{

  const isValidateEmail=/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)
  const isValidatePassword=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(Password)
  const isValidateName=/^[a-zA-Z][a-zA-Z ]*/.test(name)

  if(!isValidateEmail) return "Email not valid"
  if(!isValidatePassword) return "password not valid"
  if(!isValidateName) return "Name not valid"

  return null
}
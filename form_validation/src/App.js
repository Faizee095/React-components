import { useState } from 'react';
import './App.css';
import FormInput from './components/FormInput';

function App() {

  const [values ,setValues] = useState({
    username:"",
    email: "",
    birthday:"",
    password:"",
    confirmPassword:"",

  })
  //to get form input data we can use useState
  //if we dont want to re-render then we can use useRef or formData()

  const inputs = [
    {
      id:1,
      name:"username",
      type:"text",
      placeholder:"Username",
      label:"Username",
      erorrMessage:"Username should be 3-16 characters and must not include any special characters",
      required:true,
      pattern:"^[A-Za-z0-9]{3,16}$",
    },
    {
      id:2,
      name:"email",
      type:"email",
      placeholder:"Email",
      label:"Email",
      erorrMessage:"It should be a valid email address",
      required:true
    },
    {
      id:4,
      name:"birthday",
      type:"date",
      placeholder:"Birthday",
      label:"Birthday",
      erorrMessage:""
    },
    {
      id:5,
      name:"password",
      type:"password",
      placeholder:"Password",
      label:"Password",
      erorrMessage:"Password must be 8-20 characters and must include one lowercase , one uppercase , one  number and one special symbol",
      required:true,
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
    },
    {
      id:6,
      name:"confirmPassword",
      type:"password",
      placeholder:"Confirm Password",
      label:"Confirm Password",
      erorrMessage:"Password does not matches",
      required:true,
      pattern: values.password,
    }
  ]

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleChange = (e) => {
    setValues({...values ,[e.target.name] : e.target.value})
  }

  return (
    <div className="app">
      <form onSubmit={handleSubmit}>
        <h1>Register</h1>
        {inputs.map(input => (
          <FormInput key={input.id} {...input} value={values[input.name]} onChange={handleChange}/>
        ))}
      
      <button>Submit</button>
      </form>
    </div>
  );
}

export default App;

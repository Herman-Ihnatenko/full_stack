import Input from "../Input/Input.jsx";
import Button from "../Button/Button.jsx";
import "./styles.css";

function LoginForm() {
  return (
    <div className="login_form_component">
      <p className="login_form_title">Login Form</p>
      <div className="input_container">
        <Input
          name="Email"
          type="text"
          placeholder="Enter your email"
          label="Email"
        />
        <Input
          name="password"
          type="password"
          placeholder="Enter your password"
          label="Password"
        />
      </div>
      <Button
        type="submit"
        buttonName="Login"
        onClick={() => console.log("Login")}
      />
    </div>
  );
}

export default LoginForm;

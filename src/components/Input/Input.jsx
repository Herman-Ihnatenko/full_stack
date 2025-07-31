import "./styles.css";

function Input ({ name, type, placeholder, label }) {
  return (
    <div>
      <label>{label}</label>
      <input type={type} name={name} placeholder={placeholder} />
    </div>
  );
};

export default Input;
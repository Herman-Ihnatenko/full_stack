import "./styles.css";

function Button({ type = "button", buttonName = "Send", onClick = () => {}, children }) {
  return (
    <button type={type} className="button_component" onClick={onClick}>
      {/* {children ? "" : buttonName} */}
      {/* Улосвный рендеринг */}
      {!children && buttonName}
      {children}
    </button>
  );
}

export default Button;

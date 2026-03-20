const Button = ({ children, primary = true, ...props }) => {
  return (
    <button
      {...props}
      className={`btn ${primary ? "btn-primary" : "btn-secondary"}`}
    >
      {children}
    </button>
  );
};

export default Button;

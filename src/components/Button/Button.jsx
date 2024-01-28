export const Button = ({ className, outlined, onClick, children }) => {
  return (
    <div>
      <button
        onClick={onClick}
        className={`${outlined ? "outlined-border" : ""} ${className}`}
      >
        <span>{children}</span>
      </button>
    </div>
  );
};

import "./Button.css";

type ButtonProps = {
  text: string;
  variant?: "primary" | "secondary";
};

function Button({
  text,
  variant = "primary",
}: ButtonProps) {
  return (
    <button className={`btn btn--${variant}`}>
      {text}
    </button>
  );
}

export default Button;
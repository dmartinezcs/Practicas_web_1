import "./style.css";

interface Props {
  message: string;
}

const Error = ({ message }: Props) => {
  return (
    <p className="error">{message}</p>
  );
};

export default Error;
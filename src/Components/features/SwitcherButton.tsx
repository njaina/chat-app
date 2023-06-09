interface ButtonProps {
    name: string;
    onClick: () => void;
  }
export const Switch:React.FC<ButtonProps>=({ name, onClick })=>{return <button onClick={onClick}>{name}</button>}

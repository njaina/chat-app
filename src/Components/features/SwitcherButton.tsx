interface ButtonProps {
    name: string;
    className?: string;
    onClick: () => void;
  }
export const Switch:React.FC<ButtonProps>=({ name, className, onClick })=>{
  return <button className={className} onClick={onClick}>{name}</button>
}

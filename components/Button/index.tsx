interface ButtonProps {
  text?: string
  //onClick: Function
  type?: "button" | "submit"
  Icon?: React.ReactNode
}

export default function Button(props: ButtonProps) {
  return (
    <button /*onClick={() => props.onClick}*/
      className="w-full px-4 py-2 border-[1.5px] border-zinc-700 rounded-md hover:backdrop-invert-2 hover:cursor-pointer active:backdrop-invert-5 ease-out duration-150"
      type={props.type ? props.type : "button"}
    >
      {props.Icon}
      {props.text}
    </button>
  );
}
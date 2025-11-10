interface ButtonProps {
  text?: string
  //onClick: Function
}

export default function Button(props: ButtonProps) {
  return (
    <button /*onClick={() => props.onClick}*/
      className="w-full px-4 py-2 border-[1.5px] border-zinc-700 rounded-md"
    >
      {props.text}
    </button>
  );
}
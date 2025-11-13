interface InputProps {
  label: string
  type?: string
  placeholder: string
  value: string
  onChange: Function
}

export default function InputField(props: InputProps) {
  return (
    <label className="w-full">
      {props.label}
      <input 
        className="block w-full mt-1 px-4 py-2 border-[1.5px] border-zinc-800 transition-outline ease-out duration-75 focus:outline-solid outline-sky-950 focus:outline-1 rounded-md"
        type={props.type ? props.type : "text"}
        placeholder={props.placeholder}
        value={props.value}
        onChange={(e) => props.onChange(e)}
      ></input>
    </label>
  );
}
interface InputProps {
  label: string
  type?: string
  placeholder: string
}

export default function InputField(props: InputProps) {
  return (
    <label>
      {props.label}
      <input 
        className="block"
        type={props.type ? props.type : "text"}
        placeholder={props.placeholder}
      ></input>
    </label>
  );
}
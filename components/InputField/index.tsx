import { useField } from 'formik';

export default function InputField({
  field,
  form: { touched, errors },
  ...props
}) {

  return (
    <div>
      <label className="w-full">
        {props.label}
        <input
          className="block w-full mt-1 px-4 py-2 border-[1.5px] border-zinc-800 transition-outline ease-out duration-75 focus:outline-solid outline-sky-950 focus:outline-1 rounded-md"
          {...field}
          {...props}
        ></input>
      </label>
      {touched[field.name] && errors[field.name] &&
        <div className='error h-1 pt-0.5 -mb-1'>
          <p className='text-red-200 text-xs'>{errors[field.name]}</p>
        </div>
      }
    </div>
  );
}

import classNames from 'classnames'

const Input = ({label, type, placeholder, onChange, value}) => {

  return (
    <div>
      <label classnome='text-xl' htmlFor={`${label + type}`}>{label}</label>
      <input 
        value={value}
        id={`${label + type}`} 
        type={type}  
        className={classNames('py-4 px-3 bg-pink-500 border-2 border-pink-300 focus:border-pink-200 text-xl outline-none w-full rounded-md placeholder:text-pink-200')}
        placeholder={placeholder}
        onChange={onChange}
        />
    </div>
  )
}

export default Input

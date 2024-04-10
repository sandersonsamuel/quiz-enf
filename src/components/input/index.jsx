import classNames from 'classnames'

const Input = ({label, type, placeholder, onChange, value}) => {

  return (
    <div>
      <label className='text-xl' htmlFor={`${label + type}`}>{label}</label>
      <input 
        value={value}
        id={`${label + type}`} 
        type={type}  
        className={classNames('py-4 px-3 bg-azul-100 placeholder-shown:bg-azul-100 border-2 border-slate-600 focus:border-slate-500 text-xl outline-none w-full rounded-md placeholder:text-slate-400')}
        placeholder={placeholder}
        onChange={onChange}
        />
    </div>
  )
}

export default Input

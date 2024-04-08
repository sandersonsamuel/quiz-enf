import classNames from 'classnames'

const Button = ({children, disabled, className, onClick}) => {
  return (
    <button
    className={classNames('py-4 px-3 w-full rounded-md text-xl border-2 bg-roxo-100 border-roxo-200 text-white', className)}
    onClick={onClick}
    disabled={disabled}
    >
        {children}
    </button>
  )
}

export default Button

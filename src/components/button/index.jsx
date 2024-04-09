import classNames from 'classnames'

const Button = ({children, disabled, className, onClick, color}) => {

  const setCor = (cor) =>{
    if (cor == 'roxo'){
      return 'bg-roxo-100 border-roxo-100'
    }

    if (cor == 'verde'){
      return 'bg-green-700 border-green-900'
    }

    if (cor == 'vermelho'){
      return 'bg-red-500 border-red-800'
    }
    if(cor == 'rosa'){
      return 'bg-pink-500 border-pink-600'
    }
  }

  return (
    <button
    className={classNames('py-4 px-3 w-full rounded-md border-2 text-white', className, setCor(color))}
    onClick={onClick}
    disabled={disabled}
    >
        {children}
    </button>
  )
}

export default Button

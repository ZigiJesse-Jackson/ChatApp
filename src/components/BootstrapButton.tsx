
interface ButtonProp{
    buttonClass: string;
    buttonText: string;
}

const BootstrapButton = ({buttonClass, buttonText}:ButtonProp) => {
  return (
    <button className={"btn "+buttonClass} >
        {buttonText}
    </button>
  )
}

export default BootstrapButton;
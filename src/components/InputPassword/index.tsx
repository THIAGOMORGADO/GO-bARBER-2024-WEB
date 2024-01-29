
import { FiLock } from "react-icons/fi";
import './inputStyles.css'


type InputProps = {
  type: string;
  placeHolder: string;
  
}

const InputPassword = ({type, placeHolder, ...rest} : InputProps) => {
  return(
    <div className="InputArea">
    <FiLock className="icon"   color="#666360" />
      <input type={type} placeholder={placeHolder} {...rest} />
    </div>
  );
}

export default InputPassword;
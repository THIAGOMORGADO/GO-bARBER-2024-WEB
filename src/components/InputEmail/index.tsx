
import { FiMail } from 'react-icons/fi';
import './inputStyles.css'


type InputProps = {
  type: string;
  placeHolder: string;
  
}

const Input = ({type, placeHolder, ...rest} : InputProps) => {
  return(
    <div className="InputArea">
    <FiMail className="icon"   color="#666360" />
      <input type={type} placeholder={placeHolder} {...rest} />
    </div>
  );
}

export default Input;
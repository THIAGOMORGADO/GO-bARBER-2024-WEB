import './App.css'

import Logo from "../src/assets/Logo.png";
import Input from './components/InputEmail';

import InputPassword from './components/InputPassword';
import Button from './components/Button';

function App() {
  

  return (
    <>
      <div className="container">
        <section className='content'>

          
            <article className='FormArea'>
             <img src={Logo}/>
             <h1>Faça seu login</h1>
              <div className="formArea">
                  <Input type='mail' placeHolder='Digite seu email'/>
                  
                  <InputPassword type='password' placeHolder='Digite sua senha' />
              </div>
              <Button />
            </article>
            <article className='PersonaArea'>
             
            </article>

           
         
        </section>
        
      </div>
    </>
  )
}

export default App

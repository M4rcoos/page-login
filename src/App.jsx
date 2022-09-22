import styles from "./App.module.css";

import folha from "../public/assets/folha.svg";
import text from "../public/assets/text.svg";
import createAcount from "../public/assets/createAcount.svg";
import user from "../public/assets/user.svg";
import retangle from "../public/assets/Rectangle 10.svg";
import correct from "../public/assets/correct.svg";

import {Input} from '../src/components/Input'
function App() {
  return (
    <main>
      <div className={styles.box}>
        <input className={styles.inputLeft} />
        <input className={styles.inputCenter} />
        <input className={styles.inputRigth} />
      </div>

      <div className={styles.form}>
        <header>
          <div>
            <img src={folha} alt="" />
            <img src={text} alt="" />
          </div>

          <select name="linguagem">
            <option value="Fev">English</option>
            <option value="Mar">Espanhol</option>
            <option value="Mar">Francês</option>
            <option value="Jan">Português</option>
          </select>
        </header>
        <section>
          <div>
            <img src={user} alt="" />
            <img src={createAcount} alt="" className={styles.textCreateAcount} />
          </div>
        </section>
        <Input/>
        <div className={styles.termCondition}>
          <p>I have read and understood the Terms and Conditions</p>
          <div>
            <img src={retangle} alt="rectangle" />
            <img src={correct} alt="correct" className={styles.imgCorrect}/>
          </div>
        </div>
    <div className={styles.submitForm}>
        <button>Create Acount</button>
        <p>I already have an account</p>
    </div>
      
      </div>
    </main>
  );
}

export default App;

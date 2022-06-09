import styles from './App.module.css';
import poweredImage from './assets/powered.png';
import leftArrowImage from './assets/leftarrow.png';
import {useState} from 'react';
import {levels,calculateImc} from './helpers/imc'
import {GridItem} from "./components/index"

function App() {
  const [heightField, setHeight] = useState(0);
  const [weightField, setWeight] = useState(0);
  const [toShow, setToShow] = useState(null)

  const handleCalculateButton = () =>{
    if(heightField && weightField){
       setToShow(calculateImc(heightField,weightField));
    }
    else{
      alert('Preencha todos os campos corretamente.')
    }
  }
  const handleBackButton = () =>{
    setToShow(null)
    setHeight(0)
    setWeight(0)
  }


  return (
    <div className={styles.main}>
      <header>
        <div className={styles.headerContainer}>
          <img src={poweredImage} alt=""/>
        </div>
      </header>
      <div className={styles.container}>
          <div className={styles.leftSide}>
              <h1>Calcule seu IMC</h1>
              <p>IMC é a sigla para Índice de Massa Corporal. É uma medida internacional usada para verificar se uma pessoa está em seu peso ideal com base em sua altura e peso.</p>

              <input type="number"
                placeholder='Digite sua altura. Exemplo: 1.75 (em metros)'
                step={weightField >= 1? "0.1": "1"}
                value={heightField > 0? heightField: '' }
                disabled={toShow? true:false}
                onChange={event => setHeight(parseFloat(event.target.value))}
                />

              <input type="number"
                placeholder='Digite seu peso. Exemplo: 65.8 (em kg)'
                step={weightField >= 1? "5": "10"}
                value={weightField > 0? weightField : '' }
                disabled={toShow? true:false}
                onChange={event => setWeight(parseFloat(event.target.value))}
                />
                <button onClick={handleCalculateButton} disabled={toShow? true:false}>Calcule</button>
          </div>
          <div className={styles.rightSide}>
            {!toShow &&
                 <div className={styles.grid}>
                   {levels.map((item, key) => (
                      <GridItem key={key} item={item}/>
                   ))}
                 </div>
            }
            {toShow && 
              <div className={styles.big}>
                  <div className={styles.rightArrow} onClick={handleBackButton}>
                    <img src={leftArrowImage} alt="" />
                  </div>
                  <GridItem item={toShow}/>
              </div>
            }
          </div>
      </div>
    </div>
  );
}

export default App;

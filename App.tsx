import { motion, AnimatePresence} from "framer-motion";
import { useState } from "react";
import styles from './App.module.css'
function App() {
  const [items, setItems] = useState([""])
  const [inputVal, setInputVal] = useState("")
  const [hover, setHover] = useState(false)
  const deleteItem = (index:number) => {
    setItems((prev) => prev.filter((item, currentIndex) => currentIndex !== index))
  }
  return (
    <div className={styles.rightdiv}>
        <textarea className={styles.inpfield} onChange={(e) => { setInputVal(e.target.value) }}/>
        <button className={styles.btn} onClick={() => {
          if (items.length === 0) {
            setItems([...items, inputVal])
          }
          if (!(items[items.length - 1] === items[items.length])) {
            setItems([...items, inputVal])
          }
        }}>add item</button>
        <AnimatePresence>
        {items.map((item) => (<motion.li
          key={item}
          style={{
            backgroundColor: '#003bd1',
            marginTop: 20,
            width: 100,
            height: 100,
            justifyContent: 'center',
            borderRadius: 25,
            alignItems: 'center',
            zIndex: 0,
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          whileHover={{
            backgroundColor: '#002c9b',
          }}
          layout
          onClick={() => {if(hover === false){deleteItem(items.indexOf(item))}}}
          transition={{duration:0.2}}>
          <textarea readOnly style={{ position: 'absolute', left: 30, }}  onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}  className={styles.textinbox}>{item}</textarea>
          </motion.li>))}
      </AnimatePresence>
    </div>
  );
}

export default App;

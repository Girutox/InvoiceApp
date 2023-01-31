import './styles/_globals.scss'
import styles from './App.module.scss';

import BasicHeader from './components/organisms/basicHeader';

function App() {
  return (
    <div className={styles.appContainer}>
      <BasicHeader />
      <main>

      </main>
    </div>
  );
}

export default App;

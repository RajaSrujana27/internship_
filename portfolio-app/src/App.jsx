import styles from "./App.module.css";
import Navbar from "./Components/Navbar/Navbar.jsx";
/* import { About } from "./components/About/About";
import { Contact } from "./components/Contact/Contact";
import { Experience } from "./components/Experience/Experience";
import { Hero } from "./components/Hero/Hero";
import { Projects } from "./components/Projects/Projects";
 */
function App() {
  return (
    <div className={styles.App}>
      <Navbar />
    </div>
  );
}

export default App;
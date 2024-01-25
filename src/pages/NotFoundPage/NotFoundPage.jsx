import { Link } from "react-router-dom";
import styles from './notFoundPage.module.css'

const NotFoundPage = () => {
    return (
        <div className={styles.box}>
            <h2>Oops...Page is not found</h2>
            <Link to='/' className={styles.link}>Return to home page</Link>
      </div>
  )
}
export default NotFoundPage;
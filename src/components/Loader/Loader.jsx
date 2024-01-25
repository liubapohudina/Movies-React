import { RevolvingDot } from 'react-loader-spinner';
import styles from '../Loader/loader.module.css';


export function Loader() {
    return (
        <RevolvingDot
  visible={true}
  height="80"
  width="80"
  color="blue"
  ariaLabel="revolving-dot-loading"
  wrapperStyle={{}}
  wrapperClass={styles.customLoaderClass}
        />
    )

}
import styles from './castItem.module.css';

const CastItem = ({ datacast }) => {
    const PATH_IMAGE = 'https://image.tmdb.org/t/p/w500';
    const element = datacast.map(({ id, original_name, character, profile_path }) => (
        <li id={id} key={id}>
            <img src={PATH_IMAGE + profile_path} alt={character} width='300' height='450' loading="lazy"/>
            <h3>{original_name}</h3>
            <h3>{character}</h3>
        </li>
    ))

    return (
        <ul className={styles.listCasts}>{element}</ul>
    )

}

export default CastItem;
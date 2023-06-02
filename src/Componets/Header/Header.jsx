
import styles from './header.module.css';

export default function Header({changeId}) {


    return (
        <div className={styles.header}>
            <div>
                <h1><a className={styles.films} href="/">FILMS</a></h1>
                <span onClick={() => {
                    changeId(0)
                }} className={styles.back}>&#8592;</span>
            </div>
            <form>
                <input className={styles.inputName} type="text"/>
                <img className={styles.serch} src="https://i.ibb.co/HXm67sq/search.png" alt="serch" />
            </form>
            

        </div>
    )
}
import styles from "./contentExplain.module.css"

export default function ContentExplain(props) {
    return (
        <div className={styles.content}>
            <div className={styles.titleExplain} dangerouslySetInnerHTML={{ __html: props.title }} />
            <div className={styles.contentExplain} dangerouslySetInnerHTML={{ __html: props.content }} />
        </div>
    );
}
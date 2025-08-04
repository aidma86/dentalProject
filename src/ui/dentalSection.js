import styles from "./dentalSection.module.css";
import Image from "next/image";

const Item = ({ text }) => {
    return <div className={styles.section_content}>
        {text.split("<br>").map((txt, index) => (
            <div key={index}>
                {txt}
                <br />
            </div>
        ))}
    </div>
};

export default function DentalSection(props) {

    return (
        <>
            <hr className={styles.line}></hr>
            <div className={styles.whole_section}>
                <div className={styles.section_title}>{props.title}</div>
                <Item text={props.content} />
                <div className={styles.section_img}><Image src={props.img} width={500} height={300} alt="치과소개" /></div>
            </div>
        </>
    );
}
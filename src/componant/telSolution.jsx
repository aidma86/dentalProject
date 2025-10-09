import styles from "./telSolution.module.css";

export default function TelSolution() {
    return (
        <div>
            <form className={styles.bottom_fixed_box}>
                <input type="hidden" name="center" value="창원" />
                <h2><span>빠른</span> 상담신청</h2>
                    <div className={styles.bottom_form}>
                        <input className={styles.solution_input} placeholder="성함" />
                        <input className={styles.solution_input} placeholder="연락처" />
                        <p>개인정보처리방침<br /> 및 이용약관</p>
                        <input type="checkbox" value="1" defaultChecked />
                        <div>
                            <a href="http://cwgj.co.kr/html/board/personal_info.html" target="_blank" rel="noopener noreferrer">[자세히 보기]</a>
                        </div>
                    </div>
                    <button type="button" className={styles.solution_button}>상담신청</button>
            </form>
        </div>
    );
}


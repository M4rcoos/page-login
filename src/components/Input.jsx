import styles from "./Input.module.css";
import arrow from "../../public/assets/arrow.svg";
import olho from "../../public/assets/olho.svg";

export function Input() {
  return (
    <div className={styles.container}>
      <div className={styles.content1}>
        <input type="text" placeholder="Create Username" />
        <input type="email" placeholder="Email address" />
        <input type="text" placeholder="Date of Birth" />
        <div className={styles.contentInput}>
          <input type="password" placeholder="Set password" />
          <img src={olho} alt="arrow" className={styles.imgInput} />
        </div>
      </div>

      <div className={styles.content2}>
        <input type="text" placeholder="Create display name" />
        <input type="text" placeholder="Phone number" />
        <div className={styles.contentInput}>
          <input type="text" placeholder="Country of Origin" />
          <img src={arrow} alt="arrow" className={styles.imgInput} />
        </div>
        <div className={styles.contentInput}>
          <input type="password" placeholder="Confirm passsword" />
          <img src={olho} alt="arrow" className={styles.imgInput} />
        </div>
      </div>
    </div>
  );
}

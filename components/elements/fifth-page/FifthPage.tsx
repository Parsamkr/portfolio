import styles from "./fifth-page.module.css";
import { data } from "./data";

const FifthPage = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Projects</h2>
      <div className={styles.projectContainer}>
        {data.map((data) => (
          <div key={data.id} className={styles.projectHolder}>
            <h3>
            <a href={data.link} target="_blank">
              {data.project}
            </a></h3>
            <p>{data.description}</p>
            <div className={styles.tools}>
              {data.tools.map((tool, index) => (
                <span key={index}>{tool}</span>
              ))}
            </div>
            <p>{data.location}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default FifthPage;

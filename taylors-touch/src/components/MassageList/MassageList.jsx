import MassageCard from "../MassageCard/MassageCard";
import styles from "./MassageList.module.css";

function MassageList({ massages }) {
  
  return (  
    <div className={styles.massageList}>
      {massages.map((massage) => (
        <MassageCard key={massage.id} massage={massage} />
      ))}
    </div>
  );
}

export default MassageList;
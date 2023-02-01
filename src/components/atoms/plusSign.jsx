import styles from './plusSign.module.scss';

const PlusSign = (props) => {
  return (
    <div className={`${styles.container} ${props.classNameCircle}`}>
      <span className={props.classNamePlus}>
        {props.children}
      </span>
    </div>
  );
}
 
export default PlusSign;
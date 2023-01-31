import styles from './colorDisplayBackground.module.scss';

const ColorDisplayBackground = (props) => {
  return (
    <div className={`${styles.container} ${props.backgroundColor}`}>
    </div>
  );
}
 
export default ColorDisplayBackground;
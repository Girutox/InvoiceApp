import styles from './typographyDescriptor.module.scss';

const TypographyDescriptor = (props) => {
  return (
    <h4 className={styles.heading}>{props.children}</h4>
  );
}
 
export default TypographyDescriptor;
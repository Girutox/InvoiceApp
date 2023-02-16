import TypographyDescriptor from '../../atoms/typography/typographyDescriptor';
import styles from './typographyHeadingDescriptor.module.scss';

const TypographyHeadingDescriptor = (props) => {
  return (
    <div className={styles.container}>
      <TypographyDescriptor>{props.title}</TypographyDescriptor>
      {props.children}
    </div>
  );
};

export default TypographyHeadingDescriptor;

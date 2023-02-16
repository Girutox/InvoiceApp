import BodyDisplay from '../../atoms/bodyDisplay';
import TypographyDescriptor from '../../atoms/typography/typographyDescriptor';
import styles from './typographyBodyDescriptor.module.scss';

const TypographyBodyDescriptor = (props) => {
  return (
    <div className={styles.container}>
      <TypographyDescriptor>{props.title}</TypographyDescriptor>
      <BodyDisplay className={props.classNameBody} />
    </div>
  );
};

export default TypographyBodyDescriptor;

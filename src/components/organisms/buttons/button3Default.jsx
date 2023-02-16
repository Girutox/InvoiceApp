import ButtonLayout from '../../molecules/buttonLayout';

import styles from './button3Default.module.scss';
import PropTypes from 'prop-types';

const Button3Default = (props) => {
  Button3Default.propTypes = {
    applyHover: PropTypes.bool,
    spanText: PropTypes.string
  }

  const applyHover = props.applyHover ? props.applyHover : '';

  return (
    <>
      <ButtonLayout
        classNameButton={`${styles.hoverHandler} ${
          applyHover ? styles.applyHover : ''
        } bgc-unknown-1`}
        includeSign={false}
        classNameSpan="body1 text-bold color-secondary-3"
        spanText={props.spanText}
      />
    </>
  );
};

export default Button3Default;

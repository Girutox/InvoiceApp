import BasicHeader from '../components/organisms/basicHeader';
import ColorDisplaySection from '../components/templates/colorDisplaySection';
import TypographySection from '../components/templates/typographySection';
import ButtonDisplaySection from '../components/templates/buttonDisplaySection';
import FormElementsDisplaySection from '../components/templates/formElementsDisplaySection';

import styles from './designSystem.module.scss';

const DesignSystem = (props) => {
  return (
    <div className={styles.container}>
      <BasicHeader />
      <main>
        <ColorDisplaySection />
        <TypographySection />
        <ButtonDisplaySection />
        <FormElementsDisplaySection />
      </main>
    </div>
  );
};

export default DesignSystem;

import BasicHeader from '../components/organisms/basicHeader';
import ColorDisplaySection from '../components/templates/colorDisplaySection';
import TypographySection from '../components/templates/typographySection';
import ButtonDisplaySection from '../components/templates/buttonDisplaySection';
import FormElementsDisplaySection from '../components/templates/formElementsDisplaySection';

const DesignSystem = (props) => {
  return (
    <>
      <BasicHeader />
      <main>
        <ColorDisplaySection />
        <TypographySection />
        <ButtonDisplaySection />
        <FormElementsDisplaySection />
      </main>
    </>
  );
};

export default DesignSystem;

import Logo from '../atoms/logo';
import Heading1 from '../atoms/heading1';

const BasicHeader = () => {
  return (
    <header className='header-container'>
      <Logo />
      <Heading1 value="Design Systems"/>
    </header>
  );
}
 
export default BasicHeader;
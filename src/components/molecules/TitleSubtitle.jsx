import Heading1 from '../atoms/headings/heading1';
import SpanCustom from '../atoms/spanCustom';

import styles from './TitleSubtitle.module.scss';

const TitleSubtitle = (props) => {
  return (
    <div className={`${styles.container} ${props.className}`}>
      <Heading1 className="color-secondary-4">{props.title}</Heading1>
      <SpanCustom className="body2 color-secondary-2">{props.subTitle}</SpanCustom>
    </div>
  );
}
 
export default TitleSubtitle;
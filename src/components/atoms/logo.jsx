import {ReactComponent as LogoSVG} from "../../assets/logo.svg";
import logo from "../../assets/logo.svg";

const Logo = (props) => {
  return (
    <>
      <LogoSVG className={props.className} />
    </>
  );
};

export default Logo;

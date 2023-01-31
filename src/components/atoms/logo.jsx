import {ReactComponent as LogoSVG} from "../../assets/logo.svg";

const Logo = (props) => {
  return (
    <>
      <LogoSVG fill={props.fill} />
    </>
  );
};

export default Logo;

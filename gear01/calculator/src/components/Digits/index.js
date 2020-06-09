import  React  from "react";
import Container from '../Container';
import './index.css';

const Digits = ({ digitNumnber, onSelectDigit, className }) =>
    (<div className={`digit-box${className ? ` ${className}` : ''}`} onClick={() => onSelectDigit(digitNumnber)}>
        {digitNumnber}
    </div>);

export default Digits
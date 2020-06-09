import  React  from "react";
import Container from '../Container';
import './index.css';

const Digits = ({ digitNumber, onSelectDigit, className }) =>
    (<div className={`digit-box${className ? ` ${className}` : ''}`} onClick={() => onSelectDigit(digitNumber)}>
        {digitNumber}
    </div>);

export default Digits
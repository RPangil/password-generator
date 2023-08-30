import { useState } from "react";
import style from './passwordGen.module.css';

const PasswordGen = () =>
{
    const chars = [
        'qwertyuiopasdfghjklzxcvbnm',
        'QWERTYUIOPASDFGHJKLZXCVBNM',
        '1234567890',
        "!@#$%^&*()_+-=[]|{}:;,./<>?"
    ]
    const [genPass, setGenPass] = useState('');
    const [upperCase, setUpperCase] = useState(false);
    const [numbers, setNumbers] = useState(false);
    const [symbols, setSymbols] = useState(false);
    const [passLen, setPassLen] = useState(8);

    const includeUpperCase = () =>
    {
        setUpperCase(!upperCase);
    }

    const includeNumbers = () =>
    {
        setNumbers(!numbers);
    }

    const includeSymbols = () =>
    {
        setSymbols(!symbols);
    }

    const getPassLength = (e) =>
    {
        let len = e.target.value;

        if(len > 20)
        {
            len = 20;
            alert('Max value is 20!');
        }

        setPassLen(len);
    }

    const generatePassword = () =>
    {
        setGenPass('');
        let tempPass = ''
        let tempChars = chars[0];

        if(upperCase)
        {
            tempChars += chars[1];
        }
        
        if(numbers)
        {
            tempChars += chars[2];
        }
        
        if(symbols)
        {
            tempChars += chars[3];
        }

        let charLength = tempChars.length;

        for(let i = 0; i < passLen; i++)
        {
            tempPass += tempChars.charAt(Math.round(Math.random() * charLength));
        }

        setGenPass(tempPass);
    }

    return (
        <div className={style.body}>
            <h1 className={style.title}>Password Generator</h1>
            <form className={style.form}>
                <div className={style.output}>
                    <output name='password'>{genPass}</output>
                </div>
                <div className={`${style.row} ${style.flex} ${style.flexSpaceBetween}`}>
                    <label htmlFor='passLength'>Password Length</label>
                    <input type='number' id='passLength' name='passLength' min={8} max={20} onChange={getPassLength} value={passLen} />
                </div>
                <div className={`${style.row} ${style.flex} ${style.flexSpaceBetween}`}>
                    <label htmlFor='upperCase'>Include uppercase letters</label>
                    <input type='checkbox' id='upperCase' onClick={includeUpperCase} />
                </div>
                <div className={`${style.row} ${style.flex} ${style.flexSpaceBetween}`}>
                    <label htmlFor='numbers'>Include numbers</label>
                    <input type='checkbox' id='numbers' onClick={includeNumbers} />
                </div>
                <div className={`${style.row} ${style.flex} ${style.flexSpaceBetween}`}>
                    <label htmlFor='symbols'>Include symbols</label>
                    <input type='checkbox' id='symbols' onClick={includeSymbols} />
                </div>
                <button type='button' onClick={generatePassword}>Generate Password</button>
            </form>
        </div>
    );
}

export default PasswordGen;
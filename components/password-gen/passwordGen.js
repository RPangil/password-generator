import { Fragment, useState } from "react";

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
        setPassLen(e.target.value);
    }

    const generatePassword = (e) =>
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
        <Fragment>
            <h1>Password Generator</h1>
            <form>
                <div>
                    <output name='password'>{genPass}</output>
                </div>
                <label htmlFor='passLength'>Password Length</label>
                <input type='number' id='passLength' name='passLength' min={8} max={16} onChange={getPassLength} value={passLen} />
                <label htmlFor='upperCase'>Include uppercase letters</label>
                <input type='checkbox' id='upperCase' onClick={includeUpperCase} />
                <label htmlFor='upperCase'>Include numbers</label>
                <input type='checkbox' id='upperCase' onClick={includeNumbers} />
                <label htmlFor='upperCase'>Include symbols</label>
                <input type='checkbox' id='upperCase' onClick={includeSymbols} />
                <button type='button' onClick={generatePassword}>Generate Password</button>
            </form>
        </Fragment>
    );
}

export default PasswordGen;
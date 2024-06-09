import React, { useState } from 'react';

export function Form() {
    const [userId, setUserId] = useState('');
    const [userPassword, setPassword] = useState('');
    const [userName, setName] = useState('');
    const [userAddress, setAddress] = useState('');
    const [userCountry, setCountry] = useState('');
    const [userZIPCode, setZipCode] = useState('');
    const [userEmail, setEmail] = useState('');
    const [userSex, setSex] = useState('');
    const [userLanguage, setLanguage] = useState('');
    const [userAbout, setAbout] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        
        const isUserIdValid = userId >= 5 && userId <= 7;
        const isUserPasswordValid = userPassword.length >= 7 && userPassword.length <= 12;
        const isUserNameValid = /^[A-Za-z]+$/.test(userName);
        const isUserAddressValid = /^[A-Za-z0-9\s]+$/.test(userAddress);
        const isUserCountryValid = userCountry !== '';
        const isUserZIPCodeValid = /^[A-Za-z0-9]+$/.test(userZIPCode);
        const isUserEmailValid = /\S+@\S+\.\S+/.test(userEmail);
        const isUserSexValid = userSex == 'male' || userSex == 'female';

        if (isUserIdValid && isUserPasswordValid && isUserNameValid && isUserAddressValid && isUserCountryValid &&
            isUserZIPCodeValid && isUserEmailValid && isUserSexValid
        ) { alert(`${userId + '\n' + userPassword + '\n' + userName + '\n' + userAddress + '\n' + userCountry + '\n' + userZIPCode + '\n' + userEmail + '\n' + userSex + '\n' + userLanguage + '\n' + userAbout}`) }
    }

    return (
        <form className='form' get='POST' onSubmit={handleSubmit}>
            <div className='form__item'>
                <label htmlFor='userId'>User id [5 to 7 characters] : </label>
                <input name='userId' type='number' value={userId} onChange={(e) => setUserId(e.target.value)}/>
            </div>
            <div className='form__item'>
                <label htmlFor='userPassword'>Password [7 to 12 characters] : </label>
                <input name='userPassword' type='password' value={userPassword} onChange={(e) => setPassword(e.target.value)}/>
            </div>
            <div className='form__item'>
                <label htmlFor='userName'>Name [Alphabets characters] : </label>
                <input name='userName' type='text' value={userName} onChange={(e) => setName(e.target.value)}/>
            </div>
            <div className='form__item'>
                <label htmlFor='userAddress'> Address [Alphanumeric characters] : </label>
                <input name='userAddress' type='text' value={userAddress} onChange={(e) => setAddress(e.target.value)}/>
            </div>
            <div className='form__item'>
                <label htmlFor='userCountry'> Country [Must select a country] : </label>
                <select name="userCountry" value={userCountry} onChange={(e) => setCountry(e.target.value)}>
                    <option value="">--Please select a country--</option>
                    <option value="United States of America">United States of America</option>
                    <option value="China">China</option>
                    <option value="India">India</option>
                    <option value="Brazil">Brazil</option>
                    <option value="Japan">Japan</option>
                    <option value="Germany">Germany</option>
                    <option value="Indonesia">Indonesia</option>
                </select>
            </div>
            <div className='form__item'>
                <label htmlFor='userZIPCode'> ZIP Code [Alphanumeric characters] : </label>
                <input name='userZIPCode' type='text' value={userZIPCode} onChange={(e) => setZipCode(e.target.value)}/>
            </div>
            <div className='form__item'>
                <label htmlFor='userEmail'> Email [valid email] : </label>
                <input name='userEmail' type='email' value={userEmail} onChange={(e) => setEmail(e.target.value)}/>
            </div>
            <div className='form__item'>
                <label>Sex [Select Male or Female] : </label>
                <div className='form-radio'>
                    <div className='form-radio__item'>
                        <input id='Male' name='sex' type='radio' checked={userSex === 'male'} value='male' onChange={(e) => setSex(e.target.value)}/>
                        <label htmlFor='Male'>Male</label>
                    </div>
                    <div className='form-radio__item'>
                        <input id='Female' name='sex' type='radio' checked={userSex === 'female'} value='female' onChange={(e) => setSex(e.target.value)}/>
                        <label htmlFor='Female'>Female</label>
                    </div>
                </div>
            </div>
            <div className='form__item'>
                <label>Language [Optional] : </label>
                <div className='form-checkbox'>
                    <div className='form-checkbox__item'>
                        <input name='english' type='checkbox' checked={userLanguage === 'english'} value='english' onChange={(e) => setLanguage(e.target.value)}/>
                        <label htmlFor='english'>English</label>
                    </div>
                    <div className='form-checkbox__item'>
                        <input name='nonEnglish' type='checkbox' checked={userLanguage === 'nonEnglish'} value='nonEnglish' onChange={(e) => setLanguage(e.target.value)}/>
                        <label htmlFor='nonEnglish'>Non English</label>
                    </div>
                </div>
            </div>
            <div className='form__item'>
                <label htmlFor='about'>About [Optional] : </label>
                <textarea value={userAbout} onChange={(e) => setAbout(e.target.value)}></textarea>
            </div>
            <button type='submit'>Submit</button>
        </form>
    )
}
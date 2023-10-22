import React, {useContext, useState} from 'react';
import { AppContext } from '../context/AppContext';

const CurrencySelect = () => {
    const {currency, dispatch} = useContext(AppContext);
    const [newCurrency, setNewCurrency] = useState(currency);

    const handleCurrencyChange = (event) => {
        var currency = event.target.value;

        // Must write a dispatch statement to handle the event. Must also set the new currency.
        // See AppContext.js to understand how actions are processed

        dispatch({
            type: 'CHG_CURRENCY',
            payload: currency,
        });

        setNewCurrency(currency);

    }

    return(
        <select
            value={newCurrency}
            style={{width: '200px', height: '50px', color: 'black', background: 'lightgreen'}}
            onChange={handleCurrencyChange}>
                <option value='£'>£ Pound</option>
                <option value='$'>$ Dollar</option>
                <option value='€'>€ Pound</option>
                <option value='₹'>₹ Pound</option>
        </select>
    );
};

export default CurrencySelect;
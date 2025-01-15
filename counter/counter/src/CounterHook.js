import { useState, useEffect } from 'react';

const url = 'https://www.random.org/integers/?num=1&min=-50&max=50&col=1&base=10&format=plain&rnd=new';

const useCounterHook = (defaultValue) => {

    const [value, setValue] = useState(defaultValue);
  
    useEffect(() => {
        fetch(url)
            .then(res => res.text())
            .then(res => setValue(res.trim()))
            .catch(err => console.log(err))
    }, [])

    const inc = () => setValue(value => value < 50 ? value + 1 : value)
    const dec = () => setValue(value => value > -50 ? value - 1 : value)
    const reset = () => setValue(() => defaultValue)
    const rnd = () => setValue(() => Math.round(+(Math.random() * (50 - -50) + -50)))

    return {value, inc, dec, rnd, reset}
}

export default useCounterHook;
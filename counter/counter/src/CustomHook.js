import { useState } from 'react';

const useCustomHook = (initValue) => {

    const [value, setValue] = useState(initValue);
    // const onClick = event => setValue(event.target.value);

    const inc = () => setValue(value => value < 5 ? value + 1 : value)
    const dec = () => setValue(value => value > -5 ? value - 1 : value)
    const reset = () => setValue(() => initValue)
    // const rnd = () => setValue(() => Math.round(Math.random() * 100))
    const rnd = () => setValue(() => Math.round(+(Math.random() * (50 - -50) + -50)))

    return {value, inc, dec, rnd, reset}
}

export default useCustomHook;
export const calculatePrimes = (number: number) => {
    const primeArray = [];

    for (let i = 2; i <= number; i++) {
        let isPrime = true;
        for (let j = 2; j <= Math.sqrt(i); j++) {
            if (i % j === 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) {
            while (number % i === 0) {
                number = number / i;
                primeArray.push(i);
            }
        }
    }

    return primeArray;
};

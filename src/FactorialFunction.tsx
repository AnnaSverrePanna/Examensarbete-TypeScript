import { useState } from 'react';
import { Button, Heading, Input, VStack, InputRightElement, InputGroup, Text } from '@chakra-ui/react'
import { calculatePrimes } from './functions';

export default function FactorialFunction() {
    const [primes, setPrimes] = useState<number[] | null>(null);


    const handleGeneratePrimes = () => {
        const inputElement = (document.getElementById('number-input') as HTMLInputElement).value;
        const inputNumber = parseInt(inputElement);
        if (isNaN(inputNumber)) { // Check if inputElement is not number
            setPrimes(null);
            return;
        }
        const primeArray = calculatePrimes(inputNumber);
        setPrimes(primeArray);
    };

    return (
        <VStack w={"70%"} alignItems={"flex-start"}>
            <Heading size={"lg"}>Factorial Function</Heading>
            <InputGroup w={"full"}>
                <Input id='number-input' placeholder='Write a number' />
                <InputRightElement w={"fit-content"} mr={"2"}>
                    <Button h='1.75rem' w={"full"} onClick={handleGeneratePrimes}>
                        Generate Prime Numbers
                    </Button>
                </InputRightElement>
            </InputGroup>
            {primes !== null && (
                <Text>
                    <Text as={"b"}>Prime numbers: </Text>{primes.join(', ')}
                </Text>
            )}
            {primes === null && (
                <Text as={"b"}>Not valid input</Text>
            )}

        </VStack>
    );
}

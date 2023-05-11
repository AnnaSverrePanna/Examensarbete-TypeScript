import { useState } from 'react';
import { Button, HStack, VStack } from '@chakra-ui/react';
import PropTest from './PropTest';

export default function Container() {
    const [propType, setPropType] = useState('');

    const handleObjectClick = () => {
        setPropType('Object');
    };

    const handleStringClick = () => {
        setPropType('String');
    };

    const object = {
        text: 'Hello'
    }

    return (
        <HStack alignItems={"flex-start"} w={"50%"} p={"2"}>
            <VStack>
                <Button colorScheme={propType === 'Object' ? 'teal' : 'gray'} onClick={handleObjectClick}>Object</Button>
                <Button colorScheme={propType === 'String' ? 'teal' : 'gray'} onClick={handleStringClick}>String</Button>
            </VStack>
            {propType === 'Object' && <PropTest propType={propType} prop={object} />}
            {propType === 'String' && <PropTest propType={propType} prop={'Hello'} />}
        </HStack>
    );
}

import { Box, Heading, Text } from '@chakra-ui/react'

interface PropTestProps {
    propType: string;
    prop: {
        text: string;
    }
}

export default function PropTest(props: PropTestProps) {
    const { propType, prop } = props;

    return (
        <Box>
            <Heading size={"md"}>{propType}</Heading>
            <Text>{prop.text}</Text>
        </Box>
    );
}

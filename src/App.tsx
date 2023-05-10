import { Heading, VStack } from '@chakra-ui/react';
import FactorialFunction from './FactorialFunction';

function App() {
  return (
    <VStack>
      <Heading as={"h1"} size={"2xl"}>Typescript App</Heading>
      <FactorialFunction />
    </VStack>
  );
}

export default App;

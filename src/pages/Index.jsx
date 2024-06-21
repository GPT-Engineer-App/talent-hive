import { Container, Text, VStack, Image } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Image src="/images/hr-management.jpg" alt="HR Management" boxSize="300px" />
        <Text fontSize="2xl">Welcome to the HR Management System</Text>
        <Text>Use the navigation bar to view candidates or job openings.</Text>
      </VStack>
    </Container>
  );
};

export default Index;
import { useState } from "react";
import { Container, VStack, Text, Input, Button, Box, FormControl, FormLabel, Heading, IconButton, HStack, Textarea } from "@chakra-ui/react";
import { FaUser, FaLock, FaSignInAlt, FaUserPlus, FaEnvelope, FaCog } from "react-icons/fa";

const Index = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isRegistering, setIsRegistering] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [response, setResponse] = useState("");

  const handleLogin = () => {
    // Implement login logic here
    setIsLoggedIn(true);
  };

  const handleRegister = () => {
    // Implement registration logic here
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setIsRegistering(false);
    setUsername("");
    setPassword("");
    setEmail("");
  };

  const handleSendMessage = () => {
    // Implement message sending and autoresponse logic here
    setResponse("This is an automated response.");
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4} width="100%">
        <Heading>Autoresponder Application</Heading>
        {!isLoggedIn ? (
          <Box width="100%">
            {isRegistering ? (
              <VStack spacing={4}>
                <FormControl id="email">
                  <FormLabel>Email</FormLabel>
                  <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </FormControl>
                <FormControl id="username">
                  <FormLabel>Username</FormLabel>
                  <Input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
                </FormControl>
                <FormControl id="password">
                  <FormLabel>Password</FormLabel>
                  <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </FormControl>
                <Button leftIcon={<FaUserPlus />} colorScheme="teal" onClick={handleRegister}>
                  Register
                </Button>
                <Button variant="link" onClick={() => setIsRegistering(false)}>
                  Already have an account? Login
                </Button>
              </VStack>
            ) : (
              <VStack spacing={4}>
                <FormControl id="username">
                  <FormLabel>Username</FormLabel>
                  <Input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
                </FormControl>
                <FormControl id="password">
                  <FormLabel>Password</FormLabel>
                  <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </FormControl>
                <Button leftIcon={<FaSignInAlt />} colorScheme="teal" onClick={handleLogin}>
                  Login
                </Button>
                <Button variant="link" onClick={() => setIsRegistering(true)}>
                  Don't have an account? Register
                </Button>
              </VStack>
            )}
          </Box>
        ) : (
          <Box width="100%">
            <HStack justifyContent="space-between" width="100%">
              <Heading size="md">Welcome, {username}</Heading>
              <IconButton aria-label="Settings" icon={<FaCog />} />
              <Button colorScheme="red" onClick={handleLogout}>
                Logout
              </Button>
            </HStack>
            <VStack spacing={4} mt={4}>
              <FormControl id="message">
                <FormLabel>Message</FormLabel>
                <Textarea value={message} onChange={(e) => setMessage(e.target.value)} />
              </FormControl>
              <Button leftIcon={<FaEnvelope />} colorScheme="teal" onClick={handleSendMessage}>
                Send Message
              </Button>
              {response && (
                <Box p={4} bg="gray.100" borderRadius="md" width="100%">
                  <Text>Response: {response}</Text>
                </Box>
              )}
            </VStack>
          </Box>
        )}
      </VStack>
    </Container>
  );
};

export default Index;

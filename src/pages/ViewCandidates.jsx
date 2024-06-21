import { useState, useEffect } from "react";
import { Box, Heading, Text, VStack, HStack, Button, Input, Table, Thead, Tbody, Tr, Th, Td } from "@chakra-ui/react";
import { FaSearch } from "react-icons/fa";

const ViewCandidates = () => {
  const [candidates, setCandidates] = useState([]);
  const [selectedCandidate, setSelectedCandidate] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    // Fetch candidates from the backend API
    fetch("/api/candidates")
      .then((response) => response.json())
      .then((data) => setCandidates(data))
      .catch((error) => console.error("Error fetching candidates:", error));
  }, []);

  const handleCandidateClick = (candidate) => {
    setSelectedCandidate(candidate);
  };

  const filteredCandidates = candidates.filter((candidate) =>
    candidate.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Box p={4}>
      <Heading mb={4}>View Candidates</Heading>
      <HStack mb={4}>
        <Input
          placeholder="Search candidates"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <Button leftIcon={<FaSearch />} onClick={() => {}}>
          Search
        </Button>
      </HStack>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>Name</Th>
            <Th>Qualifications</Th>
            <Th>Experience</Th>
            <Th>Scores</Th>
          </Tr>
        </Thead>
        <Tbody>
          {filteredCandidates.map((candidate) => (
            <Tr key={candidate.id} onClick={() => handleCandidateClick(candidate)}>
              <Td>{candidate.name}</Td>
              <Td>{candidate.qualifications}</Td>
              <Td>{candidate.experience}</Td>
              <Td>{candidate.scores.join(", ")}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
      {selectedCandidate && (
        <Box mt={4} p={4} borderWidth="1px" borderRadius="lg">
          <Heading size="md">{selectedCandidate.name}</Heading>
          <Text>Qualifications: {selectedCandidate.qualifications}</Text>
          <Text>Experience: {selectedCandidate.experience}</Text>
          <Text>Scores: {selectedCandidate.scores.join(", ")}</Text>
        </Box>
      )}
    </Box>
  );
};

export default ViewCandidates;
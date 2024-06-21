import { useState, useEffect } from "react";
import { Box, Heading, Text, VStack, HStack, Button, Input, Table, Thead, Tbody, Tr, Th, Td } from "@chakra-ui/react";
import { FaSearch } from "react-icons/fa";

const ViewJobs = () => {
  const [jobs, setJobs] = useState([]);
  const [selectedJob, setSelectedJob] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    // Fetch jobs from the backend API
    fetch("/api/jobs")
      .then((response) => response.json())
      .then((data) => setJobs(data))
      .catch((error) => console.error("Error fetching jobs:", error));
  }, []);

  const handleJobClick = (job) => {
    setSelectedJob(job);
  };

  const filteredJobs = jobs.filter((job) =>
    job.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Box p={4}>
      <Heading mb={4}>View Jobs</Heading>
      <HStack mb={4}>
        <Input
          placeholder="Search jobs"
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
            <Th>Title</Th>
            <Th>Responsibilities</Th>
            <Th>Requirements</Th>
          </Tr>
        </Thead>
        <Tbody>
          {filteredJobs.map((job) => (
            <Tr key={job.id} onClick={() => handleJobClick(job)}>
              <Td>{job.title}</Td>
              <Td>{job.responsibilities}</Td>
              <Td>{job.requirements}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
      {selectedJob && (
        <Box mt={4} p={4} borderWidth="1px" borderRadius="lg">
          <Heading size="md">{selectedJob.title}</Heading>
          <Text>Responsibilities: {selectedJob.responsibilities}</Text>
          <Text>Requirements: {selectedJob.requirements}</Text>
        </Box>
      )}
    </Box>
  );
};

export default ViewJobs;
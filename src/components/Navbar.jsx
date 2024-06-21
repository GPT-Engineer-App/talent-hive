import { Box, Flex, Link, Button } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <Box bg="teal.500" px={4}>
      <Flex h={16} alignItems="center" justifyContent="space-between">
        <Box>
          <Link as={NavLink} to="/" px={2} py={1} rounded="md" _hover={{ textDecoration: "none", bg: "teal.700" }} _activeLink={{ bg: "teal.700" }}>
            Home
          </Link>
          <Link as={NavLink} to="/view-candidates" px={2} py={1} rounded="md" _hover={{ textDecoration: "none", bg: "teal.700" }} _activeLink={{ bg: "teal.700" }}>
            View Candidates
          </Link>
          <Link as={NavLink} to="/view-jobs" px={2} py={1} rounded="md" _hover={{ textDecoration: "none", bg: "teal.700" }} _activeLink={{ bg: "teal.700" }}>
            View Jobs
          </Link>
        </Box>
      </Flex>
    </Box>
  );
};

export default Navbar;
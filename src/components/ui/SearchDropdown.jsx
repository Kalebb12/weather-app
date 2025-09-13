import { Box, VStack } from "@chakra-ui/react";
import React, { useEffect, useRef } from "react";

const SearchDropdown = ({ cityOptions }) => {
  const ref = useRef(null);

  useEffect(() => {
    const handleClick = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        ref.current.style.display = "none";
      }
    };
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);


  if (!cityOptions) return null;

  const handleBoxClick = (lat, long) => {
    const searchParams = new URLSearchParams();
    searchParams.set("lat", lat); // Using the set() method
    searchParams.set("long", long); // Using the set() method

    // Update the browser's URL using pushState() as before
    const path = window.location.pathname;
    history.pushState(null, "", `${path}?${searchParams.toString()}`);

    ref.current.style.display = "none";
  };

  return (
    <VStack
      bg="var(--neutral-800)"
      border="1px solid var(--neutral-700)"
      alignItems="start"
      position="absolute"
      gap="4px"
      padding="8px"
      width="528px"
      rounded="12px"
      top="66px"
      zIndex={10}
      ref={ref}
    >
      {cityOptions.map((city) => {
        return (
          <Box
            py="10px"
            px="8px"
            rounded="8px"
            cursor="pointer"
            width="full"
            _hover={{
              border: "1px solid var(--neutral-600)",
              bg: "var(--neutral-700)",
            }}
            key={city.id}
            onClick={() => handleBoxClick(city.latitude, city.longitude)}
          >
            {city.admin1}, {city.country}
          </Box>
        );
      })}
    </VStack>
  );
};

export default SearchDropdown;

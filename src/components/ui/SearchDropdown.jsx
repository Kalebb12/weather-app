import { Box, VStack } from "@chakra-ui/react";
import React, { useEffect, useRef } from "react";
import { useSearchParams } from "react-router";

const SearchDropdown = ({ cityOptions }) => {
  const ref = useRef(null);
  const [_,setSearchParams] = useSearchParams();

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
  const handleBoxClick = (lat, long, name, country) => {
    const location = `${name}, ${country}`;
    setSearchParams({ lat, long });
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
            onClick={() => handleBoxClick(city.latitude, city.longitude, city.name, city.country)}
          >
            {city.name}, {city.country}
          </Box>
        );
      })}
    </VStack>
  );
};

export default SearchDropdown;

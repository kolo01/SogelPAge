import ContentWeb from "@/component/ContentWeb";
import NavbarWeb from "@/component/NavbarWeb";
import { Box } from "@chakra-ui/react";

import Image from "next/image";

export default function Home() {
  return (
   <Box bgcolor={"white"} > 
    <NavbarWeb/>
    <ContentWeb/>
   </Box>
  );
}

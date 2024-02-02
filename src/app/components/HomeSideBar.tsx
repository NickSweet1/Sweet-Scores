import React from "react";
import { Box, Button } from "@radix-ui/themes";
import { games } from '../../utils/constants';

const HomeSideBar = () => {
  return (
    <Box className="bg-background p-4 rounded-lg flex flex-col items-center">
      <ul className="list-none p-0 m-0 flex flex-col items-center">
        {games.map((game, index) => (
          <li key={index} className="mb-6">
            <Button>{game.name}</Button>
          </li>
        ))}
      </ul>
    </Box>
  );
};

export default HomeSideBar;
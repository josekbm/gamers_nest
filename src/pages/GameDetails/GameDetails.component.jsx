import React, {useContext} from "react";
import { GameDetailsContext } from "./../../context/GameDetailsContext";
import ProgressBar from "./../../components/Common/ProgressBar/ProgressBar.component";
import Details from "./../../components/Games/Details/Details.component";

const GameDetails = () => {
  const {
    doneFetchGameDetails,
    gameDetails,
    doneFetchGameScreenshots,
    gameScreenshots,
  } = useContext(GameDetailsContext);
  return (
    <>
      {doneFetchGameDetails && gameDetails ? (
        <>
          <Details
            gameDetails={gameDetails}
            gameScreenshots={gameScreenshots}
            doneFetchGameScreenshots={doneFetchGameScreenshots}
          />
        </>
      ) : (
        <ProgressBar />
      )}
    </>
  );
};

export default GameDetails;

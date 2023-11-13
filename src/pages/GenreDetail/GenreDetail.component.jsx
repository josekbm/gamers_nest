import React, { useContext } from "react";
import { GenreDetailContext } from "../../context/GenreDetailContext";
import Grid from "@material-ui/core/Grid";
import ProgressBar from "./../../components/Common/ProgressBar/ProgressBar.component";
import CollectionInfo from "./../../components/Collection/CollectionInfo/CollectionInfo.component";
import Game from "./../../components/Games/Game/Game.component";

const GenreDetail = () => {
  const { doneFetchGenre, doneFetchGenreGames, genre, genreGames } = useContext(
    GenreDetailContext
  );
  return (
    <>
      {doneFetchGenre && doneFetchGenreGames ? (
        <>
          <CollectionInfo item={genre} />
          <Grid container spacing={3}>
            <Game games={genreGames} />
          </Grid>
        </>
      ) : (
        <ProgressBar />
      )}
    </>
  );
};

export default GenreDetail;

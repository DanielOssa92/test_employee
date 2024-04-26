import React from "react";
import ItemCard from "./ItemCard";
import { Grid, Typography } from "@mui/material";

const PaperFavorites = (props) => {
  const { favorites, deleteFavorites } = props;

  return (
    <>
      <Grid
        container
        direction="row"
        justifyContent="center"
        sx={{ marginTop: "20px", gap: "20px" }}
      >
        {favorites.length === 0 ? (
          <Typography>
            Aún no has agregado notas a tu lista de favoritos
          </Typography>
        ) : (
          favorites.map((note) => {
            return (
              <ItemCard
                note={note}
                key={note.objectID}
                favorites={favorites}
                deleteFavorites={deleteFavorites}
              />
            );
          })
        )}
      </Grid>
    </>
  );
};

export default PaperFavorites;
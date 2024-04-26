import React from 'react'
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import moment from "moment";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

const ItemCard = (props) => {
    const { note, addFavorites, favorites, deleteFavorites } = props;

    const styles = {
        cardcontent: {
          padding: "8px 16px 8px 16px",
          "&:last-child": {
            paddingBottom: 0,
          },
        },
      };
  return (
    <Card
      variant="outlined"
      sx={{
        width: 450,
        height: "80px",
        "&:hover": {
          opacity: 0.5,
        },
      }}
      onClick={note.story_url}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          width: "100%",
          height: "100%",
        }}
      >
        <a
          href={note.url}
          target="_blank"
          style={{
            textDecoration: "none",
            outline: "none !important",
            overflow: "auto",
          }}
        >
          <CardContent style={styles.cardcontent}>
            <Typography
              component={"p"}
              variant="body2"
              sx={{
                fontSize: "12px",
                display: "flex",
                alignItems: "center",
                color: "#b3a9a9",
              }}
            >
              <AccessTimeIcon sx={{ fontSize: "18px" }} />{" "}
              {moment(note.created_at).fromNow()} by author
            </Typography>
            <Typography
              component={"p"}
              variant="subtitle2"
              sx={{ color: "#504e4e" }}
            >
              {note.title}
            </Typography>
          </CardContent>
        </a>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            backgroundColor: "#f2f7f5",
            height: "100%",
          }}
        >
          {favorites.filter((item) => item.objectID === note.objectID).length >
          0 ? (
            <IconButton onClick={() => deleteFavorites(note)}>
              <FavoriteIcon sx={{ color: "#d90030" }} />
            </IconButton>
          ) : (
            <IconButton onClick={() => addFavorites(note)}>
              <FavoriteBorderIcon sx={{ color: "#d90030" }} />
            </IconButton>
          )}
        </Box>
      </Box>
    </Card>
  )
}

export default ItemCard

import React, { useEffect, useState } from 'react'
import newServices from "../services/services";
import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import CircularProgress from "@mui/material/CircularProgress";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import ItemCard from './ItemCard';
import NewSelect from './NewSelect';


const PaperCard = (props) => {
    const { favorites, deleteFavorites, addFavorites } = props;
    const [news, setNews] = useState([]);
    const [notice, setNotice] = useState("");
    const [count, setCount] = useState(0);
    const [page, setPage] = React.useState(1);

    useEffect(() => {
        let number = page - 1;
        console.log(number);
        if (notice) {
        newServices.getNewsType(notice, number).then((response) => {
            setNews(response.hits);
            setCount(response.nbPages);
        });
        } else {
        newServices.getNews(number).then((response) => {
            setNews(response.hits);
            setCount(response.nbPages);
        });
        }
    }, [notice, page]);

    useEffect(() => {
        if (
          window.localStorage.getItem("filter") !== undefined &&
          window.localStorage.getItem("filter")
        ) {
          console.log("Existe");
          setNotice(localStorage.getItem("filter"));
        } else {
          setNotice("");
        }
      }, []);


      const handleChange = (event, value) => {
        setPage(value);
      };

  return (
    <>
     <Box sx={{ display: "flex", justifyContent: "center" }}>
        <NewSelect notice={notice} setNotice={setNotice} setPage={setPage} />
      </Box>
      <Grid
        container
        direction="row"
        justifyContent="center"
        sx={{ marginTop: "20px", gap: "20px" }}
      >
        {news.length === 0 ? (
          <CircularProgress />
        ) : (
          news.map((note) => {
            return (
              <ItemCard
                note={note}
                key={note.objectID}
                addFavorites={addFavorites}
                favorites={favorites}
                deleteFavorites={deleteFavorites}
              />
            );
          })
        )}
      </Grid>
      <Stack
        spacing={2}
        sx={{
          justifyContent: "center",
          marginTop: "15px",
          alignItems: "center",
        }}
      >
        <Pagination
          page={page}
          size="small"
          count={count}
          onChange={handleChange}
        />
      </Stack>
    </>
  )
}

export default PaperCard

import React from 'react'
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import PaperCard from './PaperCard';
import PaperFavorites from './PaperFavorites';

function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }

  CustomTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };
  
  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }

const HomeTabs = () => {
    const [value, setValue] = React.useState(0);
    const [favorites, setFavorites] = React.useState([]);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const addFavorites = (item) => {
        console.log(item);
        setFavorites(favorites.concat(item));
        localStorage.setItem("favorites", JSON.stringify(favorites));
    };
    const deleteFavorites = (item) => {
        console.log(item);
        setFavorites(favorites.filter((note) => note.objectID !== item.objectID));
        localStorage.setItem("favorites", JSON.stringify(favorites));
    };

    
  return (
    <Box sx={{ width: '100%' }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" centered>
                <Tab label="All" {...a11yProps(0)} />
                <Tab label="My Favorites" {...a11yProps(1)} />  
            </Tabs>
        </Box>
        <CustomTabPanel value={value} index={0}>
            <PaperCard
                favorites={favorites}
                setFavorites={setFavorites}
                addFavorites={addFavorites}
                deleteFavorites={deleteFavorites}
                />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
            <PaperFavorites
                favorites={favorites}
                setFavorites={setFavorites}
                deleteFavorites={deleteFavorites}
                />
        </CustomTabPanel>
    </Box>
  )
}

export default HomeTabs

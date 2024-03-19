import React from 'react';
import {
  Divider,
  List,
  ListItemButton,
  ListItemText,
  ListItemIcon,
  ListSubheader,
  Box,
  CircularProgress,
  useTheme,
} from '@mui/material';
import { Link } from 'react-router-dom';
import { useGetGenresQuery } from '../../services/TMDB';
import useStyles from './styles';
import lightLogo from '../../assets/images/lightLogo.png';
import darkLogo from '../../assets/images/darkLogo.png';
import genreIcons from '../../assets/genres'
import { useDispatch,useSelector } from 'react-redux';
import { selectGenreOrCategory } from '../../features/currentGenreOrCategory';


const categories = [
  { label: 'Popular', value: 'popular' },
  { label: 'Top Rated', value: 'top_rated' },
  { label: 'Upcoming', value: 'upcoming' }
];

const demoCat = [
  { label: 'Action', value: 'action' },
  { label: 'Comedy', value: 'comedy' },
  { label: 'Horror', value: 'horror' },
  { label: 'Animation', value: 'animation' }
];

// const redLogo = 'https://fontmeme.com/permalink/210930/8531c658a743debelelaala2fc82006e.png';
// const blueLogo = 'https://fontmeme.com/permalink/210930/6854ae5c7f76597cf8680e48a2c8a50a.png';

const Sidebar = ({ setmobileOpen }) => {
  const theme = useTheme();
  const classes = useStyles();
   const {data,isFetching}=useGetGenresQuery();
   const dispatch=useDispatch();
  //  console.log(data);                           
  return (
    <>
      <Link to="/" className={classes.imageLink}>
        <img
          className={classes.image}
          src={theme.palette.mode === 'light' ? lightLogo : darkLogo}
          alt="MovieMind logo"
        />
      </Link>
      <Divider />
      <List>
        <ListSubheader>Categories</ListSubheader>
        {categories.map(({ label, value }) => (
          <Link key={value} className={classes.links} to='/'>
            <ListItemButton onClick={() => dispatch(selectGenreOrCategory(value))}>
            <ListItemIcon>
                <img src={genreIcons[label.toLowerCase()]} className={classes.genreImages}  height={30} />
              </ListItemIcon>
              <ListItemText primary={label} />
            </ListItemButton>
          </Link>
        ))}
      </List>
      <Divider/>
      <List>
        <ListSubheader>Genres</ListSubheader>
        
        {isFetching ?(
              <Box display='flex' justifyContent='center'>
              <CircularProgress/>
            </Box>
        ):data.genres.map(({ name, id }) => (
          <Link key={name} className={classes.links} to='/'>
            <ListItemButton onClick={() => dispatch(selectGenreOrCategory(id))}>
              <ListItemIcon>
                <img src={genreIcons[name.toLowerCase()]} className={classes.genreImages}  height={30} />
              </ListItemIcon>
              <ListItemText primary={name} />
            </ListItemButton>
          </Link>
        ))}
      </List>
    </>
  );
};

export default Sidebar;

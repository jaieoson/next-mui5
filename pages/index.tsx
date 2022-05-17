import type { NextPage } from 'next'
//import Head from 'next/head'
//import Image from 'next/image'
//import Button from '@mui/material/Button';
import * as React from 'react';


/* import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar'; */


import IconButton, { IconButtonProps } from '@mui/material/IconButton';

/* import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert'; */

import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

import Box from '@mui/material/Box';

import { styled} from '@mui/material/styles';

import { useTheme } from '@mui/material/styles';

import useColorMode from '../hooks/useColorMode';

import Cards from '../components/cards';

import Dark from '../components/darkMode';

import PersistentDrawerLeft from '../components/drawer';




export default function Home() {

  

  return (
    <Box
    sx={{
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
      alignItems: 'center',
      justifyContent: 'center',
      bgcolor: 'background.default',
      color: 'text.primary',
      borderRadius: 1,
      p: 3,
    }}
  >

<PersistentDrawerLeft/>

  </Box>
  )
}



import type { NextPage } from 'next'
import * as React from 'react';

import IconButton, { IconButtonProps } from '@mui/material/IconButton';

import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

import Box from '@mui/material/Box';

import { styled} from '@mui/material/styles';

import { useTheme } from '@mui/material/styles';

import useColorMode from '../../hooks/useColorMode';




interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));



export default function Dark() {

  const [expanded, setExpanded] = React.useState(false);

  const theme = useTheme()

  const colorMode = useColorMode()

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div>


{theme.palette.mode} mode
      <IconButton sx={{ ml: 1 }} onClick={colorMode.toggleColorMode} color="inherit">
        {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
      </IconButton>


      
      <br/>
   

  </div>
  )
}



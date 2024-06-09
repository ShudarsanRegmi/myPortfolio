import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CodeTwoToneIcon from '@mui/icons-material/CodeTwoTone';
import htmlIcon from '/html.svg'


export default function Techcard() {


  return (
    <Card sx={{ maxWidth: 250 }}>
      <CardHeader
       avatar={<CodeTwoToneIcon />}
        title="Shrimp and Chorizo Paella"
      />
        <CardMedia
            component="svg"
            width="60%"
            image={htmlIcon}
            alt="Paella dish"
            sx={{ display: "flex",justifyContent:"center", alignItems:"center"}}
        />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the mussels,
          if you like.
        </Typography>
      </CardContent>
    </Card>
  );
}

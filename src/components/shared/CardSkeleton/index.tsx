import React from 'react';
import Skeleton from '@mui/material/Skeleton';
import Grid from '@mui/material/Grid';

export default function CardSkeleton(): JSX.Element {
  return (
    <Grid container item wrap="wrap" sx={{ width: 'unset' }}>
      <Skeleton sx={{ margin: '15px' }} variant="rectangular" width={280} height={140}>
        <div style={{ paddingTop: '57%' }} />
      </Skeleton>
    </Grid>
  );
}

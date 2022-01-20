import React from 'react';
import Skeleton from '@mui/material/Skeleton';
import Grid from '@mui/material/Grid';

export default function CardSkeleton() {
  return (
    <Grid container item wrap="wrap" sx={{ width: 'unset' }}>
      <Skeleton sx={{ margin: '10px 20px' }} variant="rectangular" width={310} height={140}>
        <div style={{ paddingTop: '57%' }} />
      </Skeleton>
    </Grid>
  );
}

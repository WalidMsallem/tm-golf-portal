import React from 'react';
import Grid from '@mui/material/Grid';
import FacilitiesCard from '../../components/shared/FacilitiesCard';
import data from '../../MOCK_DATA/facilities.json';


const FacilitiesManagement = () => {
  return (
    <Grid container spacing={1}>
      {data.map((facilitieItem) => {
        return (
          <Grid container item wrap="wrap" sx={{ width: 'unset' }}>
            <FacilitiesCard facilitieItem={facilitieItem} key={facilitieItem.id} />
          </Grid>
        );
      })}
    </Grid>
  );
};

export default FacilitiesManagement;

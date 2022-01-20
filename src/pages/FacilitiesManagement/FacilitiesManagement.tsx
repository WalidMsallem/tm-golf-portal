import React, { useEffect } from 'react';
import Grid from '@mui/material/Grid';
import { useDispatch, useSelector } from 'react-redux';
import FacilitiesCard from '../../components/shared/FacilitiesCard';
import CardSkeleton from '../../components/shared/CardSkeleton';
import { loadMockDataRequest, getFacilitiesRequest } from '../../features/facilities/facilities.actions';
import {
  isDummyDataLoadedSelector,
  loadingSelector,
  facilitiesSelector,
} from '../../features/facilities/facilities.selectors';

import data from '../../MOCK_DATA/facilities.json';

const FacilitiesManagement = () => {
  const isDummyDataLoaded = useSelector(isDummyDataLoadedSelector);
  const loading = useSelector(loadingSelector);
  const facilities = useSelector(facilitiesSelector);

  const dispatch = useDispatch();

  useEffect(() => {
    if (isDummyDataLoaded) {
      dispatch(getFacilitiesRequest('1'));
    } else {
      dispatch(loadMockDataRequest(data));
    }
  }, []);

  const renderContent = () => {
    if (loading.fetchFacilities) {
      return Array(10)
        .fill(0)
        .map((_: any, i: number) => {
          return <CardSkeleton key={i} />;
        });
    }
    return facilities.results.map((facilitieItem) => {
      return (
        <Grid container item wrap="wrap" sx={{ width: 'unset' }} key={facilitieItem.id}>
          <FacilitiesCard facilitieItem={facilitieItem} />
        </Grid>
      );
    });
  };

  return (
    <Grid container spacing={1}>
      {renderContent()}
    </Grid>
  );
};

export default FacilitiesManagement;

import React, { useEffect } from 'react';
import Grid from '@mui/material/Grid';
import { useDispatch, useSelector } from 'react-redux';
import Pagination from '@mui/material/Pagination';
import { makeStyles } from '@mui/styles';
import FacilitiesCard from '../../components/shared/FacilitiesCard';
import CardSkeleton from '../../components/shared/CardSkeleton';
import { loadMockDataRequest, getFacilitiesRequest } from '../../features/facilities/facilities.actions';
import { loadingSelector, facilitiesSelector } from '../../features/facilities/facilities.selectors';
import useQueries from '../../utils/useQueries.hooks';
import {
  load as loadFromLocalStorage,
  encryptAndSave as encryptAndSaveInLocalStorage,
} from '../../utils/localStorage.utils';

import data from '../../constants/MOCK_DATA.json';
import { IS_DUMMY_DATA_LOADED_KEY } from '../../constants/global.constants';

const useStyles = makeStyles({
  pagination: {
    margin: '15px 10px',
  },
});

const FacilitiesManagement = () => {
  const classes = useStyles();

  const [setQueries, getQueryByKey] = useQueries();

  const page = getQueryByKey('page') || '1';

  const loading = useSelector(loadingSelector);
  const facilities = useSelector(facilitiesSelector);

  const dispatch = useDispatch();

  const isDummyDataLoaded = loadFromLocalStorage(IS_DUMMY_DATA_LOADED_KEY, false);

  useEffect(() => {
    if (!isDummyDataLoaded) dispatch(loadMockDataRequest(data));
  }, []);

  useEffect(() => {
    if (isDummyDataLoaded) dispatch(getFacilitiesRequest(page));
  }, [page]);

  const handleChangePage = (_event: React.ChangeEvent<unknown>, value: number) => {
    setQueries({ page: value });
  };

  const renderContent = () => {
    const skeletonData = Array(10).fill(0);
    if (loading.fetchFacilities) {
      return (
        <Grid container sx={{ marginX: 5 }}>
          {skeletonData.map((_: any, i: number) => (
            <CardSkeleton key={i} />
          ))}
        </Grid>
      );
    }
    return (
      <Grid container sx={{ marginX: 5 }}>
        <Grid container wrap="wrap">
          {facilities.results.map((facilitieItem) => {
            return (
              <Grid item key={facilitieItem.id}>
                <FacilitiesCard facilitieItem={facilitieItem} />
              </Grid>
            );
          })}
        </Grid>
        <Grid container sx={{ display: 'flex', justifyContent: 'center' }}>
          <Pagination
            variant="outlined"
            shape="rounded"
            page={Number(page)}
            count={Number(facilities.totalPages)}
            className={classes.pagination}
            onChange={handleChangePage}
          />
        </Grid>
      </Grid>
    );
  };

  return (
    <Grid container spacing={1}>
      {renderContent()}
    </Grid>
  );
};

export default FacilitiesManagement;

import React, { useEffect } from 'react';
import Grid from '@mui/material/Grid';
import { useDispatch, useSelector } from 'react-redux';
import Pagination from '@mui/material/Pagination';
import { makeStyles } from '@mui/styles';
import { useLocation, useSearchParams } from 'react-router-dom';
import FacilitiesCard from '../../components/shared/FacilitiesCard';
import CardSkeleton from '../../components/shared/CardSkeleton';
import { parseSearchUrl } from '../../utils/string.utils';
import { loadMockDataRequest, getFacilitiesRequest } from '../../features/facilities/facilities.actions';
import { loadingSelector, facilitiesSelector } from '../../features/facilities/facilities.selectors';

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

  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();

  const urlQueries = parseSearchUrl(location.search);

  const loading = useSelector(loadingSelector);
  const facilities = useSelector(facilitiesSelector);

  const dispatch = useDispatch();

  const page: string = searchParams.get('page') || '1';

  const isDummyDataLoaded = loadFromLocalStorage(IS_DUMMY_DATA_LOADED_KEY, false);

  useEffect(() => {
    if (!isDummyDataLoaded) dispatch(loadMockDataRequest(data));
  }, []);

  useEffect(() => {
    if (isDummyDataLoaded) dispatch(getFacilitiesRequest(page));
  }, [page]);

  const handleChangePage = (_event: React.ChangeEvent<unknown>, value: number) => {
    setSearchParams({ ...urlQueries, page: value });
  };

  const renderContent = () => {
    if (loading.fetchFacilities) {
      return Array(10)
        .fill(0)
        .map((_: any, i: number) => {
          return <CardSkeleton key={i} />;
        });
    }
    return (
      <>
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
            count={10}
            variant="outlined"
            shape="rounded"
            page={Number(page)}
            className={classes.pagination}
            onChange={handleChangePage}
          />
        </Grid>
      </>
    );
  };

  return (
    <Grid container spacing={1}>
      {renderContent()}
    </Grid>
  );
};

export default FacilitiesManagement;

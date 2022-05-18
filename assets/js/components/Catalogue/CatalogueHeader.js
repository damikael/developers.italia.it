import React, { useCallback, useContext } from 'react';
import { createUseStyles } from 'react-jss';
import { l10NLabels } from '../../utils/l10n.js';
import { SearchBar } from '../SearchBar.js';
import { searchContextDispatch, searchContextState, setSearchValue } from '../../contexts/searchContext.js';
import {
  initialPnrr,
  initialPnrrTarget,
  initialPnrrMeasure
} from '../../utils/urlSearchParams.js';

const useStyles = createUseStyles({
  header: {
    fontSize: '3rem',
  },
  image: {
    minHeight: '25vw',
  },
});

export const CatalogueHeader = React.memo(() => {
  const classes = useStyles();
  const { searchValue } = useContext(searchContextState);
  const dispatch = useContext(searchContextDispatch);

  const handleSearch = useCallback((value) => dispatch(setSearchValue(value)), [dispatch]);


  return (
    <div className="text-center">
      <h1 className={classes.header}>{l10NLabels.software.catalogue}</h1>
      <div className="row"><h2 className="col-10 text-center mx-auto mb-3">{ initialPnrr?"(PNRR)":"" }</h2></div>
      <div className="col-10 mx-auto text-center mb-3">
        <SearchBar onChange={handleSearch} defaultValue={searchValue} placeholder={l10NLabels.search_form_label} />
      <div className="row">
      <h3 className="col-10 offset-1 text-left">{ initialPnrrTarget? "Beneficiari: " + initialPnrrTarget:"" }</h3>
      <h3 className="col-10 offset-1 text-left">{ initialPnrrMeasure? "Misura: " + initialPnrrMeasure:"" }</h3>
      </div>
      </div>
    </div>
  );
});

CatalogueHeader.displayName = 'CatalogueHeader';

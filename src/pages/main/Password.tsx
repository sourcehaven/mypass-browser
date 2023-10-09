import { CssBaseline, Grid } from "@mui/material";
import { Fragment, useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { AnyAction } from "redux";

import { VaultEntryCard } from "components";
import { RootState } from "state";
import { actions as vaultActions } from "state/vault";

export default () => {
  const dispatch = useDispatch();
  const handleSelect = async () => {
    dispatch(vaultActions.selectVaultEntries() as unknown as AnyAction);
  };
  useEffect(() => {
    handleSelect();
  }, []);
  const selection = useSelector((state: RootState) => state.vault.selection);

  return (
    <Fragment>
      <CssBaseline />
      <Grid container spacing={4} columns={{ xs: 4, sm: 8, md: 12 }}>
        {selection.map((el, idx) => (
          <Grid item key={idx} xs={2} sm={4} md={4}>
            <VaultEntryCard
              title={el.title || undefined}
              website={el.website || undefined}
              username={el.username || undefined}
            />
          </Grid>
        ))}
      </Grid>
    </Fragment>
  );
};

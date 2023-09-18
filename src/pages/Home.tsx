import { Button, CssBaseline, Typography } from "@mui/material";
import { Fragment } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { AnyAction } from "redux";

import { RootState } from "state";
import { actions as vaultActions } from "state/vault";

export const Home = () => {
  const dispatch = useDispatch();

  const selection = useSelector((state: RootState) => state.vault.selection);

  const handleSelect = async () => {
    dispatch(vaultActions.selectVaultEntries() as unknown as AnyAction);
  };

  return (
    <Fragment>
      <CssBaseline />
      <h1>Empty home ...</h1>
      <Button onClick={handleSelect}>Query</Button>
      {selection.map((el, idx) => (
        <Typography key={idx}>
          {idx}: {el.userId} {el.username} {el.website}
        </Typography>
      ))}
    </Fragment>
  );
};

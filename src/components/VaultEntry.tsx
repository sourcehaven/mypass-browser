import { Button, Card, CardActions, CardContent, Typography } from "@mui/material";

export const VaultEntryCard = (props?: { title?: string; username?: string; website?: string }) => {
  return (
    <Card sx={{ minWidth: 200 }}>
      <CardContent>
        <Typography variant="h6" color="text.secondary" gutterBottom>
          Title
        </Typography>
        <Typography color={props?.title && "text.disabled"} component="div">
          {props?.title || "unset"}
        </Typography>
        <Typography variant="h6" color="text.secondary">
          Website
        </Typography>
        <Typography color={props?.website && "text.disabled"} component="div">
          {props?.website || "unset"}
        </Typography>
        <Typography variant="h6" color="text.secondary">
          Username
        </Typography>
        <Typography color={props?.username && "text.disabled"} component="div">
          {props?.username || "unset"}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Open</Button>
      </CardActions>
    </Card>
  );
};

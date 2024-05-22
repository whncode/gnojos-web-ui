import { Button, Grid, GridProps } from '@mui/material';
import { RemoteButton } from '../types/Button';

export type RemoteProps = {
  buttons: RemoteButton[];
  onClick: (id: number) => void;
} & Omit<GridProps, 'container' | 'item' | 'onClick'>;

function Remote({ buttons, onClick, ...props }: RemoteProps) {
  return (
    <Grid container justifyItems="center" spacing={10} columnSpacing={10} columns={2} alignItems="center" {...props}>
      {buttons.map((button) => (
        <Grid item key={button.id} sm={1}>
          <Button size="large" variant="contained" fullWidth onClick={() => onClick(button.id)}>
            {button.name}
          </Button>
        </Grid>
      ))}
    </Grid>
  );
}

export default Remote;

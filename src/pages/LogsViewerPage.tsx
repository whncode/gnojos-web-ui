import { Container } from '@mui/material';
import getLogs from '../store/getLogs';

export default function LogsViewerPage() {
  return (
    <Container>
      {getLogs().map((line) => (
        <p key="{line}">{line}</p>
      ))}
    </Container>
  );
}

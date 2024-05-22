import Remote from '../components/Remote';
import getRemoteButtons from '../store/getRemoteButtons';

export default function RemotePage() {
  const buttons = getRemoteButtons();
  const onClick = (id: number) => console.log(id);

  return <Remote {...{ buttons, onClick }} />;
}

import * as C from '@chakra-ui/react';
import React from 'react';
import { useRouter } from 'next/router';
import useIdentityId from '../../effects/use-identity-id';
import useRoom from '../../effects/use-room';

const RoomPage = () => {
  const router = useRouter();
  const identityId = useIdentityId();
  const { events, players } = useRoom({ roomId: router.query.id });

  return (
    <C.Container>
      {events.map((e) => (
        <pre key={e.id}>
          {players.find((p) => p.id === e.playerId).username} - {e.type}
        </pre>
      ))}
      <C.Divider />
      {players.map((p) => (
        <pre key={p.id}>
          {p.username}
          {p.id === identityId ? ' - me' : ''}
        </pre>
      ))}
    </C.Container>
  );
};

export default RoomPage;

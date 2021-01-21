import { gql } from '@apollo/client';
import ROOM_BASE_FRAGMENT from './room-base';

const EVENT_BASE_FRAGMENT = gql`
  fragment EventBase on Event {
    id
    playerId
    room {
      ...RoomBase
    }
    roomId
    type
  }
  ${ROOM_BASE_FRAGMENT}
`;

export default EVENT_BASE_FRAGMENT;

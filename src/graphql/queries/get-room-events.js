import { gql } from '@apollo/react-hooks';
import EVENT_BASE_FRAGMENT from '../fragments/event-base';

const GET_ROOM_EVENTS = gql`
  query GetRoomEvents($roomId: ID!) {
    getRoomEvents(roomId: $roomId) {
      ...EventBase
    }
  }
  ${EVENT_BASE_FRAGMENT}
`;

export default GET_ROOM_EVENTS;

import { gql } from '@apollo/react-hooks';
import EVENT_BASE_FRAGMENT from '../fragments/event-base';

const SUBSCRIBE_ROOM_EVENTS = gql`
  subscription SubscribeRoomEvents($roomId: ID!) {
    subscribeRoomEvents(roomId: $roomId) {
      ...EventBase
    }
  }
  ${EVENT_BASE_FRAGMENT}
`;

export default SUBSCRIBE_ROOM_EVENTS;

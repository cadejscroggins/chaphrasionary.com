import { gql } from '@apollo/client';
import EVENT_BASE_FRAGMENT from '../fragments/event-base';

const JOIN_ROOM = gql`
  mutation JoinRoom($username: String!) {
    joinRoom(username: $username) {
      ...EventBase
    }
  }
  ${EVENT_BASE_FRAGMENT}
`;

export default JOIN_ROOM;

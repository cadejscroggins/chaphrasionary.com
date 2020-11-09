import { gql } from '@apollo/react-hooks';
import ROOM_BASE_FRAGMENT from '../fragments/room-base';

const GET_ROOM = gql`
  query GetRoom($id: ID!) {
    getRoom(id: $id) {
      ...RoomBase
    }
  }
  ${ROOM_BASE_FRAGMENT}
`;

export default GET_ROOM;

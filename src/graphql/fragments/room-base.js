import { gql } from '@apollo/client';

const ROOM_BASE_FRAGMENT = gql`
  fragment RoomBase on Room {
    id
    players {
      id
      username
    }
  }
`;

export default ROOM_BASE_FRAGMENT;

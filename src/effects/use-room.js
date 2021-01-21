import { useEffect } from 'react';
import { useQuery } from '@apollo/client';
import GET_ROOM from '../graphql/queries/get-room';
import GET_ROOM_EVENTS from '../graphql/queries/get-room-events';
import SUBSCRIBE_ROOM_EVENTS from '../graphql/subscriptions/subscribe-room-events';

const useRoom = ({ roomId }) => {
  const { data: roomData } = useQuery(GET_ROOM, {
    skip: !roomId,
    variables: { id: roomId },
  });

  const {
    data: roomEventsData,
    subscribeToMore: subscribeToMoreRoomEvents,
  } = useQuery(GET_ROOM_EVENTS, {
    fetchPolicy: 'cache-only',
    skip: !roomId,
    variables: { roomId },
  });

  useEffect(() => {
    if (!roomId) return;

    subscribeToMoreRoomEvents({
      document: SUBSCRIBE_ROOM_EVENTS,
      updateQuery: (prev, { subscriptionData }) => {
        const newRoomEvent = subscriptionData.data?.subscribeRoomEvents;
        if (!newRoomEvent) return prev;
        const prevRoomEvents = prev.getRoomEvents || [];
        return { getRoomEvents: [...prevRoomEvents, newRoomEvent] };
      },
      variables: { roomId },
    });
  }, [roomId]);

  return {
    events: roomEventsData?.getRoomEvents || [],
    players: roomData?.getRoom?.players || [],
  };
};

export default useRoom;

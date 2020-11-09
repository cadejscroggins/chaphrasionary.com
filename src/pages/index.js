import * as C from '@chakra-ui/react';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useMutation } from '@apollo/react-hooks';
import { useRouter } from 'next/router';
import GET_ROOM_EVENTS from '../graphql/queries/get-room-events';
import JOIN_ROOM from '../graphql/mutations/join-room';
import GET_ROOM from '../graphql/queries/get-room';

const IndexPage = () => {
  const router = useRouter();
  const { errors, formState, handleSubmit, register } = useForm();

  const [joinRoom] = useMutation(JOIN_ROOM, {
    update(cache, { data }) {
      cache.writeQuery({
        data: { getRoom: data.joinRoom.room },
        query: GET_ROOM,
        variables: { id: data.joinRoom.roomId },
      });

      cache.evict({ broadcast: false, fieldName: 'getRoomEvents' });

      cache.writeQuery({
        data: { getRoomEvents: [data.joinRoom] },
        query: GET_ROOM_EVENTS,
        variables: { roomId: data.joinRoom.roomId },
      });
    },
  });

  const onSubmit = handleSubmit(async (input) => {
    const joinRoomRes = await joinRoom({ variables: input });
    const id = joinRoomRes.data.joinRoom.roomId;
    await router.push({ pathname: '/room/[id]', query: { id } });
  });

  return (
    <C.Container
      alignItems="center"
      d="flex"
      flexDirection="column"
      h="100vh"
      justifyContent="center"
    >
      <C.Box fontSize="3.5rem" mt="-2rem">
        <span aria-label="Brain emoji" role="img">
          🧠
        </span>
      </C.Box>
      <C.Heading as="h1" fontSize={7} mt={3}>
        Chaphrasionary
      </C.Heading>
      <C.Heading
        as="h2"
        color="gray.600"
        fontSize={[3, null, 4]}
        lineHeight="1.5rem"
        mt={3}
        textAlign="center"
      >
        <C.Box as="span" color="gray.500">
          Cha
        </C.Box>
        rades + Catch
        <C.Box as="span" color="gray.500">
          phras
        </C.Box>
        e + Pict
        <C.Box as="span" color="gray.500">
          ionary
        </C.Box>
      </C.Heading>
      <C.FormControl
        as="form"
        isInvalid={errors.username}
        mt={8}
        mx="auto"
        onSubmit={onSubmit}
        w="20rem"
      >
        <C.Flex justify="center">
          <C.Input
            ref={(e) => {
              register({
                maxLength: {
                  message: 'Username must be < 15 characters long',
                  value: 14,
                },
                minLength: {
                  message: 'Username must be > 2 characters long',
                  value: 3,
                },
                pattern: {
                  message: 'Username must be alphanumeric',
                  value: /^[A-Za-z0-9]+$/,
                },
                required: { message: 'Username is required', value: true },
              })(e);

              e?.focus();
            }}
            autoComplete="off"
            isInvalid={errors.username}
            name="username"
            placeholder="Username"
          />
          <C.Button
            colorScheme="blue"
            isLoading={formState.isSubmitting}
            ml={3}
            px={9}
            type="submit"
          >
            Play
          </C.Button>
        </C.Flex>
        <C.FormErrorMessage>{errors.username?.message}</C.FormErrorMessage>
      </C.FormControl>
      <C.Box as="blockquote" mt={8} textAlign="center">
        <C.Text as="p" color="gray.400">
          &ldquo;A thrilling game of courage, wit &amp; creativity&rdquo;
        </C.Text>
        <C.Text as="small" color="gray.500">
          ~ Albert Einstein
        </C.Text>
      </C.Box>
    </C.Container>
  );
};

export default IndexPage;

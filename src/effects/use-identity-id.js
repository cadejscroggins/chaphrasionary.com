import { useEffect, useState } from 'react';
import { Auth } from 'aws-amplify';

const useIdentityId = () => {
  const [identityId, setIdentityId] = useState(null);

  useEffect(() => {
    Auth.currentCredentials().then((c) => setIdentityId(c.identityId));
  }, []);

  return identityId;
};

export default useIdentityId;

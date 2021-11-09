import useGet from '../../hooks/useGet';

const BASE_URL = 'https://koreanjson.com';

const Get = () => {
  const { isLoading, data, error } = useGet({ url: BASE_URL + '/users' });

  if (isLoading) return <div>Loading...</div>;

  if (error) return <div>Error!</div>;

  return (
    <div>
      {data?.map((user) => (
        <li>{user.name}</li>
      ))}
    </div>
  );
};

export default Get;

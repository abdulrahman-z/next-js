import { CSSProperties } from "react";

type User = {
  id: number;
  name: string;
  email: string;
  phone: string;
};

const divStyle: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  backgroundColor: "#fff",
  color: "#000",
  padding: "20px",
};

const ServerPage = async () => {
  const data = await fetch(`https://jsonplaceholder.typicode.com/users`);
  const users: User[] = await data.json();

  return (
    <>
      {users?.map((user: User) => {
        return (
          <div style={divStyle} key={user.id}>
            <p>{user.name}</p>
            <p>{user.email}</p>
            <p>{user.phone}</p>
          </div>
        );
      })}
    </>
  );
};

export default ServerPage;

type Author = {
  id: number;
  name: string;
};

export default async function Author({ userId }: { userId: number }) {
  await new Promise((resolve, reject) => setTimeout(resolve, 2000));
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${userId}`,
  );
  const author: Author = await response.json();
  return (
    <>
      <span>Written By: </span>
      <span>{author.name}</span>
    </>
  );
}

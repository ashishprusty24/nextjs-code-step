import getUsers from "@/services/getUser";

export default async function Page(props) {
  const userList = getUsers();
  const users = await userList;

  const currentId = props.params.userId;

  const userDetails = users[currentId]

  console.log(props);
  return (
    <div>
      <h1>User Details</h1>

      <h3>id:{userDetails.id}</h3>
      <h3>id:{userDetails.name}</h3>
      <h3>id:{userDetails.username}</h3>
      <h3>id:{userDetails.email}</h3>
      
    </div>
  );
}

export async function generateStaticParams() {
    const userList = await getUsers();
    const users = await userList;
  
    return users.map((user) => ({
      userId: user.id.toString()
    }));
  }

import axios from "axios";
import UserList from "../../components/UserList";

const localUrl = process.env.NEXT_PUBLIC_LOCAL_URL;

const fetchUsers = async () => {
  const response = await axios.get("http://localhost:3000/api/users");
  return response.data;
};

const deleteUser = async (id: number) => {
  const response = await axios.delete(`http://localhost:3000/api/users/${id}`);
  return response.data;
};

const UsersPage = async () => {
  const users = await fetchUsers();

  return (
    <div className="w-full h-full flex justify-center items-center">
      <UserList initialUsers={users} deleteUser={(id) => deleteUser(id)} />
    </div>
  );
};

export default UsersPage;

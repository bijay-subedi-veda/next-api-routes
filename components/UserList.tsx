import Link from "next/link";

type User = {
  id: number;
  name: string;
  email: string;
};

type Props = {
  initialUsers: User[];
  deleteUser: (id: number) => void;
};

const UserList = ({ initialUsers, deleteUser }: Props) => {
  return (
    <div className="w-3/4 p-6">
      <h1 className="text-2xl font-bold mb-4">User List</h1>

      <ul>
        {initialUsers?.map((user) => (
          <Link
            href={`/users/${user?.id}`}
            key={user.id}
            className="border-b py-2 flex justify-between items-center"
          >
            <div>
              <span className="font-bold">{user.name}</span> -
              <span>{user.email}</span>
            </div>
            <button
              // onClick={() => deleteUser(user.id)}
              className="bg-red-500 rounded-lg text-white px-4 py-2"
            >
              Delete
            </button>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default UserList;

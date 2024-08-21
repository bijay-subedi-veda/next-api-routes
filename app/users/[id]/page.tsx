// import axios from "axios";

// const fetchUserDetail = async (userId: number) => {
//     const response = await axios.get(
//       `http://localhost:3001/api/users/${userId}`
//     );
//     return response.data;
//   };

// const UserDetail = async () => {

// const userDetail =  await fetchUserDetail(3)
//   return (
//     <div className="w-3/4 p-6">
//       <h1 className="text-2xl font-bold mb-4">User Detail</h1>

//       <ul>

//         <li
//            key={userDetail.id}
//           className="border-b py-2 flex justify-between items-center"
//         >
//           <div>
//             <span className="font-bold">{user.name}</span> -
//               <span>{user.email}</span>
//           </div>
//           <button
//             // onClick={() => deleteUser(user.id)}
//             className="bg-red-500 rounded-lg text-white px-4 py-2"
//           >
//             Delete
//           </button>
//         </li>
//         {/* ))} */}
//       </ul>
//     </div>
//   );
// };

// export default UserDetail;
import axios from "axios";

type User = {
  id: number;
  name: string;
  email: string;
};

type UserDetailProps = {
  params: { id: string };
};

const localUrl = process.env.NEXT_PUBLIC_LOCAL_URL;

const fetchUserDetail = async (userId: number): Promise<User> => {
  const response = await axios.get(`http://localhost:3000/api/users/${userId}`);
  if (response.status !== 200) {
    throw new Error("Failed to fetch user data");
  }
  return response.data;
};

const UserDetail = async ({ params }: UserDetailProps) => {
  const user = await fetchUserDetail(Number(params.id));

  return (
    <div className="w-3/4 p-6">
      <h1 className="text-2xl font-bold mb-4">User Detail</h1>
      <ul>
        <li
          key={user.id}
          className="border-b py-2 flex justify-between items-center"
        >
          <div>
            <span className="font-bold">{user.name}</span> -{" "}
            <span>{user.email}</span>
          </div>
          <button className="bg-red-500 rounded-lg text-white px-4 py-2">
            Delete
          </button>
        </li>
      </ul>
    </div>
  );
};

export default UserDetail;

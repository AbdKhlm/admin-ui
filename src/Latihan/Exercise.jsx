import { useEffect, useState } from "react";
import UserCard from "./UserCard";
import PostCard from "./PostCard";
import { getUsers } from "./Services";
import { posts } from "../postsData";

function Exercise() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
  const fetchData = async () => {
    try {
      const data = await getUsers();
      setUsers(data);
    } catch (error) {
      console.error("[Component] Gagal menampilkan data:", error.message);
    }
  };
  fetchData();
}, []);

//Filter hanya untuk yang city-nya bukan Semarang
//const nonSemarangUsers = users.filter((user) => user.city !== "Semarang");

  return (
    <>
      <div className="min-h-screen bg-gray-100 p-6">
        <h1 className="text-3xl font-bold text-center mb-6 text-blue-700">
          User Cards
        </h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {users.map((user) => (
            <UserCard key={user.email} {...user} />
          ))}
        </div>
        <br></br>
        <h1 className="text-3xl font-bold text-center mb-6 text-specialRed2">
          Post Cards
        </h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
        {posts.map((post) => (
          <PostCard
           key={post.id}
           id={post.id}
           userId={post.userId}
           title={post.title}
           body={post.body}
         />
      ))}
        </div>

      </div>
    </>
  );
}

export default Exercise;
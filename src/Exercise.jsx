import React from "react";
import UserCard from "./UserCard";
import PostCard from "./PostCard";
import { posts } from "./postsData";

function Exercise() {
  return (
    <>
      <div className="min-h-screen bg-gray-100 p-6">
        <h1 className="text-3xl font-bold text-center mb-6 text-blue-700">
          User Cards
        </h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <UserCard 
          name="Abdul" 
          email="Abdul@gmail.com"
          street="Jl.Pandanaran"
          city="Semarang"
          />
          <UserCard 
          name="Khalim" 
          email="Khalim@gmail.com"
          street="Jl.Muria"
          city="Kudus"
          />
        </div>
        <br></br>
        <h1 className="text-3xl font-bold text-center mb-6 text-blue-700">
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
 export const users = [
  {
    name: "Abdul",
    email: "Abdul@gmail.com",
    street: "Jl.Pandanaran",
    city: "Semarang",
    age: 25,
    job: "Web Developer",
  },
  {
    name: "Khalim",
    email: "Khalim@gmail.com",
    street: "Jl.Muria",
    city: "Kudus",
    age: 25,
  },
];
 export const newUsers = [
  {
    name: "New Abdul",
    email: "Abdul@gmail.com",
    street: "Jl.Pandanaran",
    city: "Semarang",
    age: 25,
    job: "Web Developer",
  },
  {
    name: "New Khalim",
    email: "Khalim@gmail.com",
    street: "Jl.Muria",
    city: "Kudus",
    age: 25,
  },
];

const city = "Semarang";
const street = "Jl.Pandanaran";

export const getUsers = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await response.json();
    return users.map((user) => ({
      name: user.name,
      email: user.email,
      city,
      street,
    }));
  } catch (error) {
    console.error("[Services] Gagal mengambil data:", error.message);
    throw error;
  }
};
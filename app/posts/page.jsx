import Link from "next/link";
import Todo from "../components/todo";

export default async function PostsPage() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    next: {
      revalidate: 60,
    },
  });
  const posts = await response.json();

  const postJSX = posts.map((post) => (
  <Link href={`/posts/${post.id}`} style={{
    width: "70%"}} >
    <div
      style={{
        width: "100%",
        background: "white",
        padding: "10px",
        borderRadius: "10px",
        color: "black",
        marginTop: "20px",
        margin:"20px auto 0px"
      }}
    >
      <h1>{post.title}</h1>
      <p>{post.body} </p>
    </div>
  </Link>
  ));
  return (
    <div>
      <h1>posts page</h1>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
         flexDirection: "column",
        }}
      >
        {postJSX}
      </div>
    </div>
  );
}

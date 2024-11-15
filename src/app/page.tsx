import { createPost } from "@/action/action";
import prisma from "@/lib/db";
import Link from "next/link";

export default async function Home() {
  const posts = await prisma.post.findMany();

  return (
    <main className="flex flex-col items-center gap-y-5 pt-24 text-center">
      <h1 className="text-3xl">All Posts (0)</h1>

      <ul className="border-t border-b border-black/10 py-5 leading-8">
        {posts.map((data, index) => {
          return (
            <li key={index} className="flex items-center justify-between px-5">
              <Link href={`/post/${data.slug}`}>{data.title}</Link>
            </li>
          );
        })}
      </ul>

      <form action={createPost} className="flex flex-col gap-y-2 max-w-96">
        <input
          type="text"
          name="title"
          placeholder="title"
          className="px-2 py-1 rounded-sm border"
        />

        <textarea
          name="content"
          rows={5}
          placeholder="Content"
          className="px-2 py-1 rounded-sm border"
        />

        <button
          type="submit"
          className="bg-blue-500 py-2 text-white rounded-sm"
        >
          Create Post
        </button>
      </form>
    </main>
  );
}

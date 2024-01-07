export async function getFollowingPosts() {
  const res = await fetch(`http://localhost:9090/api/followingPosts`, {
    next: {
      tags: ["posts", "followings"],
    },
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("fetch 실패");
  }
  return res.json();
}

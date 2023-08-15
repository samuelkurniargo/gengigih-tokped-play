export async function getAllVideos() {
  const response = await fetch("http://localhost:3000/videos/");
  return await response.json();
}
export async function getVideoById(id) {
  const response = await fetch(`http://localhost:3000/videos/${id}`);
  return await response.json();
}
export async function getAllProducts(id) {
  const response = await fetch(`http://localhost:3000/products/${id}`);
  return await response.json();
}
export async function getAllComments(id) {
  const response = await fetch(`http://localhost:3000/comments/${id}`);
  return await response.json();
}
export async function createComment(data) {
  const response = await fetch(`http://localhost:3000/comments/${data.id}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return await response.json();
}

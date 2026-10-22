
import { useState } from "react";
import "./App.css";

function App() {
  const [postText, setPostText] = useState("");
  const [posts, setPosts] = useState([
    {
      id: 1,
      name: "Aashvi",
      text: "Hello everyone! Welcome to my social media app. ❤️",
      likes: 3,
      liked: false,
      comments: []
    },
    {
      id: 2,
      name: "Priya",
      text: "Enjoying a beautiful day! 🌸",
      likes: 5,
      liked: false,
      comments: []
    }
  ]);

  function addPost() {
    if (postText.trim() === "") {
      alert("Please write something!");
      return;
    }

    const newPost = {
      id: Date.now(),
      name: "Aashvi",
      text: postText.trim(),
      likes: 0,
      liked: false,
      comments: []
    };

    setPosts([newPost, ...posts]);
    setPostText("");
  }

  function toggleLike(id) {
    setPosts(posts.map(post =>
      post.id === id
        ? {
            ...post,
            liked: !post.liked,
            likes: post.likes + (post.liked ? -1 : 1)
          }
        : post
    ));
  }

  function deletePost(id) {
    setPosts(posts.filter(post => post.id !== id));
  }

  function addComment(id) {
    const comment = prompt("Enter your comment:");

    if (comment && comment.trim()) {
      setPosts(posts.map(post =>
        post.id === id
          ? {
              ...post,
              comments: [...post.comments, comment.trim()]
            }
          : post
      ));
    }
  }

  return (
    <div className="app">
      <header className="navbar">
        <h2>SocialConnect</h2>
        <span>🏠 Home</span>
      </header>

      <main className="feed">
        <section className="profile">
          <div className="avatar">A</div>
          <div>
            <h3>Aashvi Barot</h3>
            <p>Welcome to my profile!</p>
          </div>
        </section>

        <section className="create-post">
          <h3>Create a Post</h3>

          <textarea
            placeholder="What's on your mind?"
            value={postText}
            onChange={e => setPostText(e.target.value)}
          />

          <button onClick={addPost}>Post</button>
        </section>

        <h3 className="feed-title">News Feed</h3>

        {posts.map(post => (
          <article className="post" key={post.id}>
            <div className="post-header">
              <div className="small-avatar">
                {post.name.charAt(0)}
              </div>

              <strong>{post.name}</strong>

              <button
                className="delete"
                onClick={() => deletePost(post.id)}
              >
                Delete
              </button>
            </div>

            <p className="post-text">{post.text}</p>

            <p className="likes">
              {post.likes} Likes · {post.comments.length} Comments
            </p>

            <div className="actions">
              <button
                className={post.liked ? "liked" : ""}
                onClick={() => toggleLike(post.id)}
              >
                {post.liked ? "❤️ Liked" : "🤍 Like"}
              </button>

              <button onClick={() => addComment(post.id)}>
                💬 Comment
              </button>
            </div>

            {post.comments.map((comment, index) => (
              <p className="comment" key={index}>
                💬 {comment}
              </p>
            ))}
          </article>
        ))}
      </main>
    </div>
  );
}

export default App;

import React from 'react';

const Blogs = () => {
  const blogPosts = [
    { title: "Postagem 1", content: "Conteúdo da postagem 1." },
    { title: "Postagem 2", content: "Conteúdo da postagem 2." },
    { title: "Postagem 3", content: "Conteúdo da postagem 3." },
  ];

  return (
    <div>
      <h2>Blogs</h2>
      <p>Aqui você encontrará nossos blogs mais recentes:</p>
      <ul>
        {blogPosts.map((post, index) => (
          <li key={index}>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Blogs;

// Example of dynamically loading blog posts
const postsContainer = document.getElementById('blog-posts');

// Simulated data
const posts = [
    { title: 'Post 1', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { title: 'Post 2', content: 'Praesent libero. Sed cursus ante dapibus diam. Sed nisi.' },
    { title: 'Post 3', content: 'Nulla quis sem at nibh elementum imperdiet.' },
];

// Insert posts into the container
posts.forEach(post => {
    const postElement = document.createElement('article');
    postElement.innerHTML = `
        <h2>${post.title}</h2>
        <p>${post.content}</p>
        <a href="#">Read more</a>
    `;
    postsContainer.appendChild(postElement);
});

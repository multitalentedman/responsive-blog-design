const posts = [
    {
        id: 1,
        thumbUrl: "images/port1.jpg",
        postLink: "#",
        category: "AI",
        categoryLink: "#",
        title: "AI - Things You Should Learn",
        summary: "Summmary AI - Things You Should Learn AI - Things You Should Learn AI - Things You Should Learn AI - Things You Should Learn",
        author: "Admin",
        datePublished: "Feb 20, 2010"
    },
    {
        id: 1,
        thumbUrl: "images/port2.jpg",
        postLink: "#",
        category: "AI",
        categoryLink: "#",
        title: "AI - Things You Should Learn",
        summary: "Summmary AI - Things You Should Learn AI - Things You Should Learn AI - Things You Should Learn AI - Things You Should Learn",
        author: "Admin",
        datePublished: "Feb 20, 2010"
    },
    {
        id: 1,
        thumbUrl: "images/port3.jpg",
        postLink: "#",
        category: "AI",
        categoryLink: "#",
        title: "AI - Things You Should Learn",
        summary: "Summmary AI - Things You Should Learn AI - Things You Should Learn AI - Things You Should Learn AI - Things You Should Learn",
        author: "Admin",
        datePublished: "Feb 20, 2010"
    },
    {
        id: 1,
        thumbUrl: "images/port4.jpg",
        postLink: "#",
        category: "AI",
        categoryLink: "#",
        title: "AI - Things You Should Learn",
        summary: "Summmary AI - Things You Should Learn AI - Things You Should Learn AI - Things You Should Learn AI - Things You Should Learn",
        author: "Admin",
        datePublished: "Feb 20, 2010"
    },
    {
        id: 1,
        thumbUrl: "images/port5.jpg",
        postLink: "#",
        category: "AI",
        categoryLink: "#",
        title: "AI - Things You Should Learn",
        summary: "Summmary AI - Things You Should Learn AI - Things You Should Learn AI - Things You Should Learn AI - Things You Should Learn",
        author: "Admin",
        datePublished: "Feb 20, 2010"
    },
    {
        id: 1,
        thumbUrl: "images/port6.jpg",
        postLink: "#",
        category: "AI",
        categoryLink: "#",
        title: "AI - Things You Should Learn",
        summary: "Summmary AI - Things You Should Learn AI - Things You Should Learn AI - Things You Should Learn AI - Things You Should Learn",
        author: "Admin",
        datePublished: "Feb 20, 2010"
    }
];

const $blogPostsContainer = $('.blog-posts-container');

const createPostDiv = (postLink, thumbUrl, category, categoryLink, title, summary, author, datePublished) => {
    let HTMLCode = `
        <div class="post">
            <a href="${postLink}" class="post-link"></a>
            <div class="thumbnail">
                <img src="https://harekrishnamandir.org/uploads/gallery/2024-06-08%20Darshan_4406312.webp" alt="img1">
            </div>

            <div class="title-container">
                <a href="${categoryLink}" class="category">${category}</a>
                <a href="${postLink}">
                    <h2 class="title">${title}</h2>
                </a>
            </div>

            <div class="summary">
                ${summary}
            </div>

            <div class="meta-data">
                <div class="author">
                    By ${author}
                </div>
                <div class="date">
                    On ${datePublished}
                </div>
            </div>
        </div>
    `;
    $blogPostsContainer.append(HTMLCode);
}

const populateAllPosts = () => {
    $.each(posts, (index, post) => {
        createPostDiv(post.postLink, post.thumbUrl, post.category, post.categoryLink, post.title, post.summary, post.author, post.datePublished);
    });
}

populateAllPosts();

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
                <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fscience.nasa.gov%2Fmissions%2Fhubble%2Fhubble-sees-possible-runaway-black-hole-creating-a-trail-of-stars%2F&psig=AOvVaw2pK9EQcfhXcq-fNYexW--1&ust=1717938907534000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCLCQjLOLzIYDFQAAAAAdAAAAABAE" alt="img1">
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

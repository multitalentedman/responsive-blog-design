const $blogPostsContainer = $('.blog-posts-container');

const createPostDiv = (postLink, thumbUrl, category, categoryLink, title, summary, author, datePublished) => {
    let HTMLCode = `
        <div class="post">
            <a href="${postLink}" class="post-link"></a>
            <div class="thumbnail">
                <img src="${thumbUrl}" alt="img1">
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

const populateAllPosts = (posts) => {
    $.each(posts, (index, post) => {
        createPostDiv(
            post.link[post.link.length-1].href, 
            post.media$thumbnail?post.media$thumbnail.url:'#', 
            post.category?post.category[0].term:'uncategorised', 
            post.category?`https://multitalentedman.blogspot.com/search/label/${post.category}`:'#', 
            post.title.$t, 
            post.summary.$t, 
            post.author[0].name.$t, 
            new Date(post.published.$t).toLocaleDateString());
    });
}

const fetchAllPosts = (data)=> {
    console.log(data);
    populateAllPosts(data.feed.entry);
}

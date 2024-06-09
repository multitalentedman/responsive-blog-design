const $blogPostsContainer = $('.blog-posts-container');
const loadMoreBtn = $('.load-more-btn');
let startIndex = 1;
const maxResults = 6;

let fetchLink = `https://multitalentedman.blogspot.com/feeds/posts/summary?max-results=${maxResults}&start-index=${startIndex}&alt=json`

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
            post.link[post.link.length - 1].href,
            post.media$thumbnail ? post.media$thumbnail.url.replace('/s72', '/s400') : 'https://www.shutterstock.com/image-vector/businessman-multitasking-multi-skill-keep-260nw-310345274.jpg',
            post.category ? post.category[0].term : 'uncategorised',
            post.category ? `https://multitalentedman.blogspot.com/search/label/${post.category[0].term}` : '#',
            post.title.$t,
            post.summary.$t,
            post.author[0].name.$t,
            new Date(post.published.$t).toLocaleDateString());
    });
}

const fetchAllPosts = (data) => {
    populateAllPosts(data.feed.entry);
    let nextLink = data.feed.link;
    if (nextLink[nextLink.length - 1].rel == 'next') {

        startIndex += maxResults;
        fetchLink = `https://multitalentedman.blogspot.com/feeds/posts/summary?max-results=${maxResults}&start-index=${startIndex}&alt=json`;
    }
    else{
        loadMoreBtn.css('display','none');
    }

}

fetch(fetchLink)
    .then((res) => res.json())
    .then((data) => fetchAllPosts(data));

loadMoreBtn.on('click',()=>{
    fetch(fetchLink)
    .then((res) => res.json())
    .then((data) => fetchAllPosts(data));
})

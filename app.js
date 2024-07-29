document.addEventListener("DOMContentLoaded", () => {
    // This is where you would fetch and update data from social media APIs
    const twitterFollowers = 10000;
    const twitterTweets = 500;
    const facebookFollowers = 8000;
    const facebookPosts = 120;
    const instagramFollowers = 15000;
    const instagramPosts = 300;

    document.getElementById("twitter-followers").textContent = twitterFollowers.toLocaleString();
    document.getElementById("twitter-tweets").textContent = twitterTweets.toLocaleString();
    document.getElementById("facebook-followers").textContent = facebookFollowers.toLocaleString();
    document.getElementById("facebook-posts").textContent = facebookPosts.toLocaleString();
    document.getElementById("instagram-followers").textContent = instagramFollowers.toLocaleString();
    document.getElementById("instagram-posts").textContent = instagramPosts.toLocaleString();
});

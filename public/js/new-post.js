const newPost = async (event) => {
    event.preventDefault();
    //so page doesnt reset 

    const postTitle = document.querySelector('#post-title').value.trim();
    const postMessage = document.querySelector('#post-message').value.trim();

    if (postTitle && postMessage) {
        const response = await fetch ('/api/posts')
    }
}
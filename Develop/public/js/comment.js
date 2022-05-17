const commentFormHandler = async function (event) {
  event.preventDefault();

  const postId = document.querySelector('#post-id').innerHTML;
  const body = document.querySelector('#comment-text').value;

  if (body) {
    await fetch('/api/comment', {
      method: 'POST',
      body: JSON.stringify({
        postId,
        body
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    document.location.reload();
  }
};

document
  .querySelector('#new-comment-form')
  .addEventListener('submit', commentFormHandler);

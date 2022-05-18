const postId = document.querySelector('#post-id').innerHTML;

const editFormHandler = async function (event) {
  event.preventDefault();
  const body = document.querySelector('#post-body').value;

  await fetch(`/api/post/${postId}`, {
    method: 'PUT',
    body: JSON.stringify({ body }),
    headers: { 'Content-Type': 'application/json' }
  })
  document.location.replace('/dashboard');
};

const deleteClickHandler = async function () {
  await fetch(`/api/post/${postId}`, {
    method: 'DELETE'
  });

  document.location.replace('/dashboard');
};

document
  .querySelector('#update-post-form')
  .addEventListener('submit', editFormHandler);
document
  .querySelector('#delete-btn')
  .addEventListener('click', deleteClickHandler);

document.addEventListener('DOMContentLoaded', () => {

  document.querySelectorAll('.comment-btn').forEach(button => {
    button.addEventListener('click', (event) => {
      const imageBlock = event.target.closest('.image-block');
      const commentsSection = imageBlock.querySelector('.comments-section');
      commentsSection.style.display = commentsSection.style.display === 'block' ? 'none' : 'block';
    });
  });
  document.querySelectorAll('.upvote-btn').forEach(button => {
    button.addEventListener('click', (event) => {
      const imageBlock = event.target.closest('.image-block');
      const imageId = imageBlock.dataset.imageId;

      fetch('/upvote', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ imageId }),
      })
      .then(response => response.text())
      .then(data => alert(data))
      .catch(error => console.error('Error:', error));
    });
  });

  document.querySelectorAll('.submit-comment-btn').forEach(button => {
    button.addEventListener('click', (event) => {
      const imageBlock = event.target.closest('.image-block');
      const imageId = imageBlock.dataset.imageId;
      const commentInput = imageBlock.querySelector('.comment-input');

      fetch('/comment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ imageId, comment: commentInput.value }),
      })
      .then(response => response.text())
      .then(data => {
        alert(data);
        const commentsList = imageBlock.querySelector('.comments-list');
        const newComment = document.createElement('div');
        newComment.textContent = commentInput.value;
        commentsList.appendChild(newComment);
        commentInput.value = '';
//hide comment section
const commentsSection = imageBlock.querySelector('.comments-section');
console.log('Submit button clicked', commentsSection); // Debugging line
commentsSection.classList.add('hidden');
console.log('Add hidden class', commentsSection.classList.contains('hidden'));
        
      })
      .catch(error => console.error('Error:', error));
    });
  });
});


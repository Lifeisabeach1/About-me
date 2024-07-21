document.getElementById('replaceButton').addEventListener('click', () => {
  const image = document.getElementById('myImage');
  const video = document.getElementById('myVideo');
  const button = document.getElementById('replaceButton');
  
  // Hide the image
  image.style.display = 'none';
  button.style.display = 'none';
  // Show the video
  video.style.display = 'block';
  
  // Start playing the video
  video.play();

  button.parentNode.removeChild(button);
  
  // When the video ends, show the image again
  video.addEventListener('ended', function() {
      video.style.display = 'none';
      image.style.display = 'block';
      button.style.display = 'block';
  });
});


document.getElementById('replaceButton').addEventListener('click', () => {
  const image = document.getElementById('myImage');
  const video = document.getElementById('myVideo');
  const button = document.getElementById('replaceButton');

  
  image.style.display = 'none';
  button.style.display = 'none';

  
  video.style.display = 'block';
  video.play();

  
  video.addEventListener('ended', function() {
      video.style.display = 'none';
      image.style.display = 'block';
      button.style.display = 'block';
  });
});
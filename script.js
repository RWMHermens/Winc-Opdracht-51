const list = document.querySelector(".list");

const button = document.querySelector(".albumsbutton");

// const getAlbums = items.map((item) => item.name);

const getAlbums = items.filter((item) => item.album_group === "album");

// const newAlbumSet = [...new Set(getAlbums)];
// console.log(newAlbumSet);

const addToResultList = (li) => list.appendChild(li);

const removeList = () => {
  while (list.firstChild) {
    list.removeChild(list.firstChild);
  }
};

const generateAlbumsHTML = (album) => {
  removeList();
  const li = document.createElement("li");

  const image = document.createElement("img");
  image.classList.add("albums");
  image.src = album.images[1].url;
  const link = document.createElement("a");
  link.setAttribute("target", "_blank");
  link.href = "https://open.spotify.com/album/" + album.id;
  list.appendChild(li);
  li.appendChild(link);
  link.appendChild(image);

  // li.innerHTML = album;
  return li;
};

const displayAlbums = () =>
  getAlbums.map(generateAlbumsHTML).forEach(addToResultList);

button.addEventListener("click", displayAlbums);

const removeAlbum = () => {
  let remove =
    getAlbums.splice(1, 1) && getAlbums.splice(2, 1) && getAlbums.splice(3, 1);
  return remove;
};
removeAlbum();

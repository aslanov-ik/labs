function renderResponse(text) {
  document
    .querySelector(".container")
    .insertAdjacentHTML("beforeend", `${text}`);
}

export { renderResponse };

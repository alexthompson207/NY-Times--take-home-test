export const getAllStories = () => {
  return fetch('https://api.nytimes.com/svc/topstories/v2/home.json?api-key=NyU9tPGJBvDz5j0PEOAANPDOu9XMKitt')
    .then(response => response.json())
}
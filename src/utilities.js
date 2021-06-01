export const cleanStoriesData = (stories) => {
  return stories.results.map((story, i) => {
    return {
      id: i,
      title: story.title,
      section,
      author: story.byline,
      publishedDate: story.published_date,
      overview: story.abstract,
      link: story.url,
      photo: story.multimedia[0].url,
      photoAlt: story.multimedia[0].caption,
    }
  })
}
const formatDate = (date) => {
  let adjustedDate = new Date(date);
  return adjustedDate.toDateString();
}

export const cleanStoriesData = (stories) => {
  return stories.results.map((story, i) => {
    return {
      id: i,
      title: story.title,
      section: story.section,
      author: story.byline,
      publishedDate: formatDate(story.published_date),
      overview: story.abstract,
      link: story.url,
      photo: story.multimedia[0].url,
      photoAlt: story.multimedia[0].caption,
    }
  })
}

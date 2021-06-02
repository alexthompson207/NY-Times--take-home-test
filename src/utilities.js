const formatDate = (date) => {
  let adjustedDate = new Date(date);
  return adjustedDate.toDateString();
}

export const cleanStoriesData = (stories) => {
  return stories.results.map((story, i) => {
    let photo;
    let photoAlt;
    if (!story.multimedia) {
      photo = 'https://avatars.githubusercontent.com/u/221409?s=280&v=4'
      photoAlt = 'New York Times logo'
    } else {
      photo = story.multimedia[3].url;
      photoAlt = story.multimedia[3].caption
    }
    return {
      id: i,
      title: story.title,
      section: story.section,
      author: story.byline,
      publishedDate: formatDate(story.published_date),
      overview: story.abstract,
      link: story.url,
      photo: photo,
      photoAlt: photoAlt
    }
  })
}

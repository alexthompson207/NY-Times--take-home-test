import React from 'react';
import './Article.css';

const Article = ({ id, title, author, published, photo, alt, section }) => {

  return (
    <section className='article-card' id={id}>
      <img className='article-img' alt={alt} src={photo} />
      <div className='article-text-box'>
        <h2 className='article-title'>{title}</h2>
        <p className='article-author'>{author}</p>
        <div className='article-details'>
          <p className='article-section'>{section.toUpperCase()}</p>
          <p className='article-date'>{published}</p>
        </div>
      </div>
    </section>
  )
}

export default Article;

// results": [
// {
//   "section": "climate",
//     "subsection": "",
//       "title": "Biden Suspends Drilling Leases in Arctic National Wildlife Refuge",
//         "abstract": "The decision effectively blocks oil and gas drilling in one of the largest tracts of undeveloped wilderness in the United States.",
//           "url": "https://www.nytimes.com/2021/06/01/climate/ANWR-Biden-drilling.html",
//             "uri": "nyt://article/c2fa8599-cf76-52c0-9c24-4bccceced2a5",
//               "byline": "By Coral Davenport, Henry Fountain and Lisa Friedman",
//                 "item_type": "Article",
//                   "updated_date": "2021-06-01T16:52:43-04:00",
//                     "created_date": "2021-06-01T16:42:16-04:00",
//                       "published_date": "2021-06-01T16:42:16-04:00",
//                         "material_type_facet": "",
//                           "kicker": "",
//                             "des_facet": [
//                               "Global Warming",
//                               "Greenhouse Gas Emissions",
//                               "Oil (Petroleum) and Gasoline",
//                               "Executive Orders and Memorandums"
//                             ],
//                               "org_facet": [],
//                                 "per_facet": [
//                                   "Biden, Joseph R Jr"
//                                 ],
//                                   "geo_facet": [
//                                     "Arctic National Wildlife Refuge"
//                                   ],
//                                     "multimedia": [
//                                       {
//                                         "url": "https://static01.nyt.com/images/2021/06/01/climate/01CLI-ARCTIC/01CLI-ARCTIC-superJumbo.jpg",
//                                         "format": "superJumbo",
//                                         "height": 1365,
//                                         "width": 2048,
//                                         "type": "image",
//                                         "subtype": "photo",
//                                         "caption": "A polar bear in the Beaufort Sea, off the Alaskan coast in the Arctic National Wildlife Refuge.",
//                                         "copyright": "Steven J. Kazlowski/Alamy"
//                                       },
//                                       {
//                                         "url": "https://static01.nyt.com/images/2021/06/01/climate/01CLI-ARCTIC/01CLI-ARCTIC-thumbStandard.jpg",
//                                         "format": "Standard Thumbnail",
//                                         "height": 75,
//                                         "width": 75,
//                                         "type": "image",
//                                         "subtype": "photo",
//                                         "caption": "A polar bear in the Beaufort Sea, off the Alaskan coast in the Arctic National Wildlife Refuge.",
//                                         "copyright": "Steven J. Kazlowski/Alamy"
//                                       },
//                                       {
//                                         "url": "https://static01.nyt.com/images/2021/06/01/climate/01CLI-ARCTIC/01CLI-ARCTIC-thumbLarge.jpg",
//                                         "format": "thumbLarge",
//                                         "height": 150,
//                                         "width": 150,
//                                         "type": "image",
//                                         "subtype": "photo",
//                                         "caption": "A polar bear in the Beaufort Sea, off the Alaskan coast in the Arctic National Wildlife Refuge.",
//                                         "copyright": "Steven J. Kazlowski/Alamy"
//                                       },
//                                       {
//                                         "url": "https://static01.nyt.com/images/2021/06/01/climate/01CLI-ARCTIC/01CLI-ARCTIC-mediumThreeByTwo210.jpg",
//                                         "format": "mediumThreeByTwo210",
//                                         "height": 140,
//                                         "width": 210,
//                                         "type": "image",
//                                         "subtype": "photo",
//                                         "caption": "A polar bear in the Beaufort Sea, off the Alaskan coast in the Arctic National Wildlife Refuge.",
//                                         "copyright": "Steven J. Kazlowski/Alamy"
//                                       },
//                                       {
//                                         "url": "https://static01.nyt.com/images/2021/06/01/climate/01CLI-ARCTIC/01CLI-ARCTIC-articleInline.jpg",
//                                         "format": "Normal",
//                                         "height": 121,
//                                         "width": 190,
//                                         "type": "image",
//                                         "subtype": "photo",
//                                         "caption": "A polar bear in the Beaufort Sea, off the Alaskan coast in the Arctic National Wildlife Refuge.",
//                                         "copyright": "Steven J. Kazlowski/Alamy"
//                                       }
//                                     ],
//                                       "short_url": "https://nyti.ms/3fZBMmw"
// }
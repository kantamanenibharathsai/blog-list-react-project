// Write your JS code here
import BlogItem from '../BlogItem'

import './index.css'

const BlogList = props => {
  const {blogsList} = props
  return (
    <ul className="unordered-list-container">
      {blogsList.map(eachBlogItem => (
        <BlogItem key={eachBlogItem.id} eachBlogItem={eachBlogItem} />
      ))}
    </ul>
  )
}

export default BlogList

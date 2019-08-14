import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import Reactmarkdown from "react-markdown"

const UserTemplate = ({ data }) => {
  {
    console.log(data)
  }
  return (
    <Layout>
      <h1>{data.strapiUser.username}</h1>
      <ul>
        {data.strapiUser.articles.map(article => (
          <li key={article.id}>
            <h2>
              <Link to={`/Articles_${article.id}`}>{article.title}</Link>
            </h2>
            {/* <p>{article.Content}</p> */}
            <Reactmarkdown
              source={article.Content.substring(0, 500).concat("...")}
            />
            <Link to={`/Articles_${article.id}`}>Read More</Link>
          </li>
        ))}
      </ul>
    </Layout>
  )
}

export default UserTemplate

//author article query
export const query = graphql`
  query UserTemplate($id: String!) {
    strapiUser(id: { eq: $id }) {
      id
      username
      articles {
        id
        title
        Content
      }
    }
  }
`

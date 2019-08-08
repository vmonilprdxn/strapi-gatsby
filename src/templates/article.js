import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"

const ArticleTemplate = ({ data }) => {
  {
    console.log(data)
  }
  return (
    <Layout>
      <h1>{data.strapiArticles.title}</h1>
      <p>
        {" "}
        by{" "}
        <Link to={`/authors/User_${data.strapiArticles.author.id}`}>
          {data.strapiArticles.author.username}
        </Link>
      </p>
      <img src={data.strapiArticles.featureimage.url} />
      <p>{data.strapiArticles.Content}</p>
    </Layout>
  )
}

export default ArticleTemplate

export const query = graphql`
  query ArticleTemplate($id: String!) {
    strapiArticles(id: { eq: $id }) {
      title
      Content
      featureimage {
        url
      }
      author {
        id
        username
      }
    }
  }
`

import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import Reactmarkdown from "react-markdown"

const IndexPage = ({ data }) => (
  <Layout>
    {console.log(data)}
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <ul>
      {data.allStrapiArticles.edges.map(document => (
        <li key={document.node.id}>
          <span>{document.node.id}</span>
          <h2>
            <Link to={`/${document.node.id}`}>{document.node.title}</Link>
          </h2>
          <img src={document.node.featureimage.url} />
          {/* <p>{document.node.Content}</p> */}
          <Reactmarkdown
            source={document.node.Content.substring(0, 500).concat("...")}
            escapeHtml={false}
          />
          <Link to={`/${document.node.id}`}>Read More</Link>
        </li>
      ))}
    </ul>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage

export const pageQuery = graphql`
  query IndexQuery {
    allStrapiArticles {
      edges {
        node {
          id
          title
          Content
          featureimage {
            url
          }
        }
      }
    }
  }
`

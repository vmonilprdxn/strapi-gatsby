import React from "react"
import { Link, graphql } from "gatsby"
import Img from 'gatsby-image';

import Layout from "../components/layout"

const IndexPage = ({data}) => (
  <Layout>
    
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <ul>
      {
        data.allStrapiArticle.edges.map( document => (
          <li key = {document.node.id}>
            <span>{document.node.id}</span>
            <h2>
              <Link to ={`/${document.node.id}`}>{document.node.title}</Link>
            </h2>
            <Img fluid = {document.node.featureimage.childImageSharp.fluid} />
            <p>{document.node.Content}</p>
          </li>
        ))

      }
    </ul>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage

export const pageQuery = graphql `
  query IndexQuery {
    allStrapiArticle {
      edges {
        node {
          id
          title
          Content
          featureimage {
            childImageSharp {
              fluid(maxWidth: 1000) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`


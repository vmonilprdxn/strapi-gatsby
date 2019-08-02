import React from 'react';
import { Link, graphql } from 'gatsby';
import Img from 'gatsby-image';
import Layout from '../components/layout';

const ArticleTemplate = ({ data }) => {
	{console.log(data)}
	return(

  <Layout>
    <h1>{data.strapiArticles.title}</h1>
		<p> by <Link to={`/authors/User_${data.strapiArticles.author.id}`}>{data.strapiArticles.author.username}</Link></p>
		<Img fluid = {data.strapiArticles.featureimage.childImageSharp.fluid} />
    <p>{data.strapiArticles.Content}</p>
  </Layout>
	)
}
	


export default ArticleTemplate

export const query = graphql`
  query ArticleTemplate($id: String!) {
    strapiArticles(id: {eq: $id}) {
      title
			Content
			featureimage {
				childImageSharp {
					fluid(maxWidth: 1000) {
						...GatsbyImageSharpFluid
					}
				}
			}
			author {
        id
        username
      }
    }
	}
	`
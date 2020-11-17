import React from 'react'
import { graphql } from 'gatsby'
import MonsterCookiesRecipe from '../../components/MonsterCookiesRecipe'

// TODO>>>: This folder and file is the temp hard-coded way. Will set up Netlify
// CMS later to take care of dynamic blog pages.
export default function monsterCookiesRecipePage({ data }) {
  return (
    <div>
      <MonsterCookiesRecipe cookiesImg={data.cookiesImg} />
    </div>
  )
}

export const query = graphql`
  query {
    cookiesImg: file(relativePath: { eq: "cookies.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

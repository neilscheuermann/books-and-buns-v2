import React from 'react'
import styled from 'styled-components'
import cookiesImg from '../assets/images/cookies.jpg'
import { TABLET_MAX_WIDTH_PLUS_1 } from '../styles/GlobalStyles'

export default function Blog() {
  return (
    <div className="jc-center">
      <WrapperStyles>
        <div className="jc-center">
          <h1>Monster Cookies</h1>
        </div>
        <div className="jc-center">
          <img src={cookiesImg} alt="" />
        </div>
        <p>
          We can’t get enough of delicious, easy snacks. Especially during a
          Nanowrimo session, or any work-as-much-as-you-can mode. Here we have a
          recipe that fills two needs at once! As it correlates so well with the
          fall season all together.
        </p>
        <p>
          Halloween is such a magical time of year to me. Celebrating life and
          death and the magic in-between. Dress-ups and spooks.
        </p>
        <p>
          But, the very best part? The traditions! Make these cookies the day
          after Halloween, they are perfectly titled Monster Cookies (plus you
          can use all the m&m’s from your trick-or-treating loot)
        </p>
        <p>
          These cookies temper some of the pure sugar with a little bit of
          protein and fiber, viola! Fun cookie tradition!
        </p>
        <p>I hope you like these as much as we do!</p>
        <h2>Ingredients:</h2>
        <ul>
          <li> ½ lb. butter (room temp)</li>
          <li>1 ½ lb non-natural peanut butter (I prefer smooth/creamy)</li>
          <li>1 lb. (about 2 1/4c) brown sugar (I prefer dark)</li>
          <li>2 cups white sugar</li>
          <li>6 eggs</li>
          <li>1 ½ tsp. vanilla</li>
          <li>1 ½ tsp. honey</li>
          <li>4 tsp. baking soda</li>
          <li>9 cups oats (I use quick oats)</li>
          <li>
            ½ lb. chocolate chips (I prefer semi-sweet…also I never measure and
            am sure I dump in A LOT more than this)
          </li>
          <li>1 bag plain M & M’s</li>
        </ul>
        <h2> Directions:</h2>
        <ul>
          <li>Preheat the oven to 350 degrees.</li>
          <li>In a large bowl mix butter, peanut butter, and sugars.</li>
          <li>Add eggs and mix.</li>
          <li>Add vanilla, honey, and baking soda and mix.</li>
          <li>When all combined, gently fold in oats and chocolate chips.</li>

          <li>
            Scoop 1/4 cup of dough into a cookie sheet (I use silicone pads for
            easy removal) and flatten slightly.
          </li>
          <li>Bake for 7-8 minutes (cookies will still look doughy)</li>
          <li>
            Immediately upon removal from the oven stick 6 M & M's in each
            cookie.
          </li>
          <li>
            Allow cookies to cool on a cookie sheet 5-10 minutes before moving
            to a cooling rack to cool completely.
          </li>
        </ul>
        <p>These taste even better the next day and are freezer friendly.</p>
        <p>
          Recipe source unknown (friends help friends and I don’t know where it
          started)
        </p>
        <p>
          For more Nanowrimo tips, listen to Books and Buns Podcast where we
          share some easy favorites.
        </p>
      </WrapperStyles>
    </div>
  )
}

const WrapperStyles = styled.div`
  max-width: 800px;

  img {
    object-fit: cover;
    width: 100%;
    height: 300px;

    ${/* Web */ ''}
      @media only screen and (min-width: ${TABLET_MAX_WIDTH_PLUS_1}) {
      height: 400px;
    }
  }

  }

  p {
    font-size: 1.5em;
    margin: 24px 0;
  }

  p:nth-of-type(1) {
    margin-top: 48px;
  }

  h1 {
    color: var(--black);
    font-size: 2em;

    ${/* Web */ ''}
    @media only screen and (min-width: ${TABLET_MAX_WIDTH_PLUS_1}) {
      font-size: 4em;
    }
  }

  h1:first-of-type {
    margin: 24px 0 16px;

    ${/* Web */ ''}
    @media only screen and (min-width: ${TABLET_MAX_WIDTH_PLUS_1}) {
      margin: 48px 0 24px;
    }
  }

  h2 {
    font-size: 1.8em;
  }

  ul {
    margin-left: 16px;
  }

  li {
    font-size: 1.2rem;
  }
`

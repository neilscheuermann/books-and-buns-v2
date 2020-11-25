// Pull from this article, https://medium.com/@ttennant/react-inline-styles-and-media-queries-using-a-custom-react-hook-e76fa9ec89f6
import { useEffect, useState } from 'react'

export const useMediaQuery = (query) => {
  const mediaMatch = window.matchMedia(query)
  const [matches, setMatches] = useState(mediaMatch.matches)

  useEffect(() => {
    const handler = (e) => setMatches(e.matches)
    mediaMatch.addListener(handler)
    return () => mediaMatch.removeListener(handler)
  })
  return matches
}

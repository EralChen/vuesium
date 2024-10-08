// https://vike.dev/data
export { data }
export type { Data }

import type { PageContextServer } from 'vike/types'
import { filterMovieData } from '../filterMovieData'
import type { MovieDetails } from '../types'

type Data = Awaited<ReturnType<typeof data>>

const data = async (pageContext: PageContextServer) => {
  const response = await fetch(`https://star-wars.brillout.com/api/films/${pageContext.routeParams?.movieId}.json`)
  let movie = (await response.json()) as MovieDetails

  // We remove data we don't need because the data is passed to the client; we should
  // minimize what is sent over the network.
  movie = filterMovieData(movie)

  // The page's <title>
  const { title } = movie

  return {
    movie,
    // The page's <title>
    title,
  }
}

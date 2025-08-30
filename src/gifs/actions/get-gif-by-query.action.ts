import type {GiphyResponse} from "../interfaces/giphy.response.ts";
import type {Gif} from "../interfaces/gif.interface.ts";
import {giphyApi} from "../api/giphy.api.ts";

export const getGifByQuery = async (query: string): Promise<Gif[]> => {
  const response = await giphyApi<GiphyResponse>(`/search`, {
    params: {
      q: query,
      limit: 10,
      rating: 'g'
    }
  })

  return response.data.data.map(gif => ({
    id: gif.id,
    title: gif.title,
    url: gif.images.original.url,
    width: Number(gif.images.original.width),
    height: Number(gif.images.original.height)
  }))

}
import axios from 'axios';


const getNews = (number) => {
  const request = axios.get(`https://hn.algolia.com/api/v1/search?tags=front_page&page=${number}&hitsPerPage=8`)
  return request.then(response => response.data)
}

const getNewsType = (type, number) => {
  const request = axios.get(`https://hn.algolia.com/api/v1/search_by_date?query=${type}&tags=story&page=${number}&hitsPerPage=8`)
  return request.then(response => response.data)
}

export default {
  getNews,
  getNewsType,
}
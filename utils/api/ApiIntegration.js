import axios from "axios";
export async function SearchfetchData(text) {
 const res= await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=bb4746c9087fd5ca4855a1ed770f0349&language=en-US&page=1&include_adult=false&query=${text}`,
    )
    return res.data.results
}
export async function TrendingMovies()
{
    const res = await axios.get('https://api.themoviedb.org/3/trending/movie/day?api_key=bb4746c9087fd5ca4855a1ed770f0349')
    return res.data.results
}
// export async function TrendingMovies()
// {
//     const res = await axios.get('https://api.themoviedb.org/3/trending/movie/day?api_key=bb4746c9087fd5ca4855a1ed770f0349')
//     return res.data.results
// }
export async function AllMovies()
{
    const res = await axios.get('https://api.themoviedb.org/3/movie/top_rated?api_key=bb4746c9087fd5ca4855a1ed770f0349&language=en-US&page=2')
    return res.data.results
}
import { axiosMovieChill } from "../utils/axiosConfig"

const movieChillApi = {
    postComment: async (data) => {
       const response = await axiosMovieChill.post('comment', data);
       return response
    },
    getAllCommentMovie: async (params) => {
        return await axiosMovieChill.get('commentMovie',{
            params: params
        });   
    }
}

export default movieChillApi
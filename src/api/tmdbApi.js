import axiosClient from "../utils/axiosConfig"


export const category = {
    movie: 'movie',
    tv: 'tv'
}

export const movieType = {
    upcoming: 'upcoming',
    popular: 'popular',
    top_rated: 'top_rated',
    latest: 'latest'
}

export const tvType = {
    popular: 'popular',
    top_rated: 'top_rate',
    on_the_air: 'on_the_air'
}

export const mediaType = {
    all: 'all',
    movie: 'movie',
    tv: 'tv',
    person: 'person',
}

export const timeWindow = {
    day: 'day',
    week: 'week',
}

const tmdbApi = {
    
    getMoviesList: async (type, options = {}) => {
        const url = 'movie/' + type;
        return await axiosClient.get(url, options)
    },
    getTvList: (type, options = {}) => {
        const url = 'tv/' + type;
        return axiosClient.get(url, options)
    },
    getVideos: (cate, id) => {
        const url = cate + '/' + id + '/videos';
        return axiosClient.get(url, { params: {} })
    },
    search: async (cate, query) => {
        const url = 'search/' + cate;
        return await axiosClient.get(url, {
            params: {
                query: query
            }
        })
    },
    // detail: (cate, id, options = {}) => {
    //     const url = cate + '/' + id;
    //     return axiosClient.get(url, options)
    // },

    // credits: (cate, id) => {
    //     const url = cate + '/' + id + '/credits';
    //     return axiosClient.get(url, { params: {} })
    // },
    // similar: (cate, id) => {
    //     const url = cate + '/' + id + '/similar';
    //     return axiosClient.get(url, { params: {} })
    // },
    getTrending: async (mediaType, timeWindow, options = {} ) => {
        const url = `trending/${mediaType}/${timeWindow}`;
        return await axiosClient.get(url,options)
    },

    getSimilar: async (id, options = {} ) => {
        let url = `movie/${id}/similar`;
        let response = await axiosClient.get(url, options);
        if(response === 404){
            url = `tv/${id}/similar`;
            response = await axiosClient.get(url, options);
        }
        return response
    },
    getMostPopular: async (options = {} ) => {
        const url = `discover/movie?sort_by=popularity.desc`;
        return await axiosClient.get(url,options)
    },
    getActor: async (id, options = {}) => {
        let url = `tv/${id}/credits`
        let response = await axiosClient.get(url, options);
        if(response === 404){
            url = `movie/${id}/credits`;
            response = await axiosClient.get(url, options);
        }
        return response
    },
    getKeywords: async (id, options = {}) => {
        let url = `movie/${id}/keywords`
        let response = await axiosClient.get(url, options);
        if(response === 404){
            url = `tv/${id}/keywords`;
            response = await axiosClient.get(url, options);
        }
        return response;
    },
    detail: async (id, options = {}) => {
        let url = `tv/${id}`;
        let response = await axiosClient.get(url, options);
        if(response === 404){
            url = `movie/${id}`;
            response = await axiosClient.get(url, options);
        }
        return response
    },
}

export default tmdbApi;

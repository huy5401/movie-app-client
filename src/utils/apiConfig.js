const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: '13eeb362f33d8f0537f7d1b578559f55',
    originalImage: (imagePath) => `https://image.tmdb.org/t/p/original/${imagePath}`,
    w500Image: (imagePath) => `https://image.tmdb.org/t/p/w500/${imagePath}`
}

export default apiConfig;
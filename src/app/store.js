import {configureStore} from '@reduxjs/toolkit'
import { tmdbApi } from '../services/TMDB'
import { genreOrCategoryReducer } from '../features/currentGenreOrCategory'
export default configureStore({
    reducer:{
        [tmdbApi.reducerPath]:tmdbApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(tmdbApi.middleware),
    currentGenreOrCategory:genreOrCategoryReducer,
})
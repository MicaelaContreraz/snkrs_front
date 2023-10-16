import axiosInstance from '../utils/axiosInstance.js';
import { createSlice } from "@reduxjs/toolkit";
import { fetchSizes } from './filters.js';

const initialState = {
    products: [],
    pages: {
        currentPage: 0,
        itemRange: { min: 0, max: 0 },
        totalPages: 0,
    },
    detail: {}
};

export const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {
        setProducts: (state, { payload }) => {
            console.log("🚀 ~ file: products.js:20 ~ payload:", payload)
            state.products = payload.products
            state.pages = { ...payload.pages }
        },
        setDetail: (state, { payload }) => {
            state.detail = payload
        },
        cleanProducts: (state, { payload }) => {
            state.products = []
        },
        cleanDetail: (state, { payload }) => {
            state.detail = []
        }
    }
});
// Async action to sign in
export const fetchProducts = (filters) => async (dispatch) => {
    console.log("🚀 ~ file: products.js:36 ~ fetchProducts ~ filters:", filters)
    try {

        // dispatch(cleanProducts())
        let endPoint = '/products'
        if (Object.keys(filters).length) {
            Object.entries(filters).forEach(([key, value], index) => {
                if (!index) endPoint += `?${key}=${value}`
                else endPoint += `&${key}=${value}`
            })
        }
        const products = await axiosInstance.get(endPoint)
        console.log("🚀 ~ file: products.js:47 ~ fetchProducts ~ products:", products)
        dispatch(setProducts(products))
    } catch (error) {
        // Captura cualquier error que pueda ocurrir durante la solicitud
        console.error('Error:', error);
    }
};

export const fetchDetail = (id) => async (dispatch) => {
    try {
        dispatch(cleanDetail())
        const productDetail = await axiosInstance.get(`/products/${id}`)
        if (productDetail) {
            dispatch(setDetail(productDetail))
        }
    }
    catch (error) {
        console.error('Error:', error.message);
    }
}

export const {
    setProducts,
    setDetail,
    cleanProducts,
    cleanDetail
} = productSlice.actions;

export default productSlice.reducer;
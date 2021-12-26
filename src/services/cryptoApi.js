// var options = {
    // method: 'GET',
    // url: 'https://coinranking1.p.rapidapi.com/stats',
    // headers: {
    //   'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
    //   'x-rapidapi-key': '5ce6cbace8msh9ba31986e20bc41p14284ajsndda8c9908684'
    // }
  //}

import {createApi,fetchBaseQuery  } from '@reduxjs/toolkit/query/react'
const cryptoApiHeaders = {
      'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
      'x-rapidapi-key': '5ce6cbace8msh9ba31986e20bc41p14284ajsndda8c9908684'
    
}
const baseUrl = 'https://coinranking1.p.rapidapi.com';
const createRequest = (url) => ({ url, headers: cryptoApiHeaders });
// conole.log(createRequest)
export const cryptoApi = createApi({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder)=> ({
        getCryptos: builder.query({
            
            query: (count) => createRequest(`/coins?limit=${count}`)
        }),
        getCryptoDetails: builder.query({
            
            query: (coinId) => createRequest(`/coin/${coinId}`)
        }),
        getCryptoHistory: builder.query({
            
            query: ({coinId,timePeriod}) => createRequest(`/coin/${coinId}/history/${timePeriod}`)
        }),
        getExchanges: builder.query({
            query: () => createRequest('/exchanges'),
        }),
    })
})
export const {useGetCryptosQuery,useGetExchangesQuery,useGetCryptoDetailsQuery,useGetCryptoHistoryQuery} = cryptoApi
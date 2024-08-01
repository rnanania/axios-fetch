// src/mocks/handlers.js
import { http, HttpResponse } from 'msw'
 
export const handlers = [
  http.get('/api/posts', () => {
    return new HttpResponse('Post Content')
  }),
  http.get('/api/posts-400', () => {
    throw new HttpResponse(null, { status: 400 })
  }),
  http.get('/api/posts-401', () => {
    return new HttpResponse(null, { status: 401 })
  }),
  http.get('/api/posts-404', () => {
    return new HttpResponse(null, {
      status: 404,
      statusText: 'Out Of Posts',
    })  
  }),
  http.get('/api/posts-500', () => {
    throw new HttpResponse(null, { status: 500 })
  }),
  http.get('/api/posts-error', () => {
    return HttpResponse.error()
  }),   
]
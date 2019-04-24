import axios from 'axios'

export const getList = () => axios.get('/yiqi/postuser/list').then(res => res.data)
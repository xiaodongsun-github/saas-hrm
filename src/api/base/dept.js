import {createAPI, createFormAPI} from '@/utils/request'

export const list = data => createAPI('/company/department', 'get', data)

export const save = data => createAPI('/company/department', 'post', data)

export const findById = data => createAPI(`/company/department/${data.id}`, 'get')

export const deleteById = data => createAPI(`/company/department/${data.id}`, 'delete')

export const update = data => createAPI(`/company/department/${data.id}`, 'put', data)

export const saveOrUpdate = data => {return data.id?update(data):save(data)}
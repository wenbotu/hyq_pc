import fetch from 'isomorphic-fetch'

export const SELECT_HOME_LIST = 'SELECT_HOME_LIST'
export const SELECT_INFO_DETAIL = 'SELECT_INFO_DETAIL'
export const SELECT_MORE_LIST = 'SELECT_MORE_LIST'
export const SELECT_HOTMI_SER='SELECT_HOTMI_SER'
export const SELECR_GUAN_WANG='SELECR_GUAN_WANG'
export const SELECR_HOTMI_SELECTION_SER='SELECR_HOTMI_SELECTION_SER'
export const SELECR_HOTMI_LIMIT_SER='SELECR_HOTMI_LIMIT_SER'
//红蜜服务详情的；http://testhm.hotyq.com/api/service/listPcServiceCate

function hotmiLimitServePosts(json) {
	console.log(json)
  return {
    type: SELECR_HOTMI_LIMIT_SER,
		hotmiLimitData: json
  }
}

export function hotmiLimitServeList() {
  return dispatch => {
		return fetch(`${guanW}/hongmi-api/service/getPcTimepriceServiceCate`).then(response => response.json())
      	.then(json => dispatch(hotmiLimitServePosts(json)))
  }
}

function hotmiSelectionServePosts(json) {
	console.log(json)
  return {
    type: SELECR_HOTMI_SELECTION_SER,
		hotmiSelectionData: json
  }
}

export function hotmiSelectionServeList() {
  return dispatch => {
		return fetch(`${guanW}/hongmi-api/service/getPcSelectServiceCate`).then(response => response.json())
      	.then(json => dispatch(hotmiSelectionServePosts(json)))
  }
}
	
function hotmiServePosts(json) {
  return {
    type: SELECT_HOTMI_SER,
		hotmiData: json
  }
}

export function hotmiServeList() {
  return dispatch => {
		return fetch(`${guanW}/hongmi-api/service/listPcServiceCate`).then(response => response.json())
      	.then(json => dispatch(hotmiServePosts(json)))
  }
}
	
function homeListPosts(json) {
  return {
    type: SELECT_HOME_LIST,
		homeList: json
  }
}

export function selectHomeList() {
  return dispatch => {
		return fetch(`${api}/list.do`).then(response => response.json())
      	.then(json => dispatch(homeListPosts(json)))
  }
}

function moreListPosts(name,json) {
  return {
    type: SELECT_MORE_LIST,
		moreList: json,
		name
  }
}

export function selectMoreList(name,page) {
  return dispatch => {
		return fetch(`${api}/${name}.do?currentPage=${page}&pageSize=15`).then(response => response.json())
      	.then(json => dispatch(moreListPosts(name,json)))
  }
}

function infoDetailPosts(json) {
  return {
    type: SELECT_INFO_DETAIL,
		infoDetail: json
  }
}

export function selectInfoDetail(id) {
  return dispatch => {
		return fetch(`${api}/infoDetail/${id}`).then(response => response.json())
      	.then(json => dispatch(infoDetailPosts(json)))
  }
}
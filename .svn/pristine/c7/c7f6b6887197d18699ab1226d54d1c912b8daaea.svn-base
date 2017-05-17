import fetch from 'isomorphic-fetch'

export const SELECT_NAME_LIST = 'SELECT_NAME_LIST'
export const SELECT_SERVICE = 'SELECT_SERVICE'

function nameListPost(json) {
	console.log('nameListAction')
  return {
    type: SELECT_NAME_LIST,
		nameList: json
  }
}

export function selectNameList() {
  return dispatch => {
		return fetch(`${guanW}/hongmi-api/service/listPcServiceCate`).then(response => response.json())
      	.then(json => dispatch(nameListPost(json)))
  }
}

function servicePost(json) {
  return {
    type: SELECT_SERVICE,
		service: json
  }
}

export function selectService(id) {
  return dispatch => {
		return fetch(`${guanW}/hongmi-api/service/getPcServiceProject?id=${id}`).then(response => response.json())
      	.then(json => dispatch(servicePost(json)))
  }
}
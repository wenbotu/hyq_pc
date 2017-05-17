import fetch from 'isomorphic-fetch'

export const SERVICE_APPOINT = 'SERVICE_APPOINT'
export const SELECT_NAME_LIST = 'SELECT_NAME_LIST'
export const SELECT_SERVICE = 'SELECT_SERVICE'

function serviceAppointPost(json) {
  return {
    type: SERVICE_APPOINT,
		appointResult: json
  }
}

export function serviceAppoint(data) {
  return dispatch => {
		return fetch(`${guanW}/hongmi-api/order/pcSubmit`,{
			method:'POST',
			headers: {
		    'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
		  },
			body:data
		}).then(response => response.json())
      	.then(json => dispatch(serviceAppointPost(json)))
  }
}

function nameListPost(json) {
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
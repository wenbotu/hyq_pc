import { combineReducers } from 'redux'
import { routerReducer as routing } from 'react-router-redux'
import { SELECT_NAME_LIST , SELECT_SERVICE ,SERVICE_APPOINT } from '../actions'

export function serviceAppoint(state = { }, action) {
	switch (action.type) {
    case SERVICE_APPOINT:
      return Object.assign({}, state, {
      	appointResult:action.appointResult
      })
    default:
      return state
	}
}

export function selectNameList(state = { }, action) {
	switch (action.type) {
    case SELECT_NAME_LIST:
      return Object.assign({}, state, {
      	nameList:action.nameList.data
      })
    default:
      return state
	}
}

export function selectService(state = { }, action) {
	switch (action.type) {
    case SELECT_SERVICE:
      return Object.assign({}, state, {
      	service:action.service.data
      })
    default:
      return state
	}
}
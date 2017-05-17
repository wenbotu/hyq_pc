import { combineReducers } from 'redux'
import { routerReducer as routing } from 'react-router-redux'
import { SELECT_HOME_LIST , SELECT_MORE_LIST , SELECT_INFO_DETAIL , SELECT_HOTMI_SER , SELECR_HOTMI_SELECTION_SER , SELECR_HOTMI_LIMIT_SER } from '../actions'
import { selectNameList , selectService ,serviceAppoint } from '../routes/HotmiService2/reducers'

export function hotmiLimitServeList(state = { }, action) {
	switch (action.type) {
    case SELECR_HOTMI_LIMIT_SER:
      return Object.assign({}, state, {
      	limitDataList:[action.hotmiLimitData.data]
      })
    default:
      return state
	}
}

export function hotmiSelectionServeList(state = { }, action) {
	switch (action.type) {
    case SELECR_HOTMI_SELECTION_SER:
      return Object.assign({}, state, {
      	selectionDataList:[action.hotmiSelectionData.data]
      })
    default:
      return state
	}
}

export function hotmiServeList(state = { }, action) {
	switch (action.type) {
    case SELECT_HOTMI_SER:
      return Object.assign({}, state, {
      	dataList:action.hotmiData.data
      })
    default:
      return state
	}
}

export function selectHomeList(state = { }, action) {
	switch (action.type) {
    case SELECT_HOME_LIST:
      return Object.assign({}, state, {
      	infoList:action.homeList.infoList,
      	reportList:action.homeList.reportList
      })
    default:
      return state
	}
}

export function selectMoreList(state = { }, action) {
	switch (action.type) {
    case SELECT_MORE_LIST:
      return Object.assign({}, state, {
      	list:action.moreList[action.name+'List'],
      	totalPage:action.moreList.totalPage,
      	totalCount:action.moreList.totalCount,
      	nowPage:action.moreList.nowPage
      })
    default:
      return state
	}
}

export function selectInfoDetail(state = { }, action) {
	switch (action.type) {
    case SELECT_INFO_DETAIL:
      return Object.assign({}, state, {
      	infoDetail:action.infoDetail
      })
    default:
      return state
	}
}

const rootReducer = combineReducers({
	selectHomeList,
	selectMoreList,
	selectInfoDetail,
	hotmiServeList,
	hotmiSelectionServeList,
	hotmiLimitServeList,
	selectNameList,
	selectService,
	serviceAppoint,
  routing
})

export default rootReducer

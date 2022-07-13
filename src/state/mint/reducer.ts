import {Field, selectCurrency, typeInput, setRecipient} from "./action";
import { combineReducers } from 'redux';

function selectInput(state = [], action: any) {
    switch (action.type) {
      case "selectCurrency":
        return {filed: action.field, currencyId: action.currencyId}
    case "typeInput":
        return {filed: action.field, typedValue: action.typedValue}

      default:
        return state
    }
}

function recipient(state = [], action: any) {
    switch (action.type) {
      case "setRecipient":
        return {recipient: action.recipient}

      default:
        return state
    }
}

//只有有个一个default作为输出供外部使用
const todoApp = combineReducers({
    selectInput,
    recipient
})

export default todoApp


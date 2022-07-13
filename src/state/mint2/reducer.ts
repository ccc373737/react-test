import {Field, selectCurrency, typeInput, setRecipient} from "./action";
import { createReducer } from '@reduxjs/toolkit'

export interface SwapState {
  readonly independentField: Field
  readonly typedValue: string
  readonly [Field.INPUT]: {
    readonly currencyId: string | undefined | null
  }
  readonly [Field.OUTPUT]: {
    readonly currencyId: string | undefined | null
  }
  // the typed recipient address or ENS name, or null if swap should go to sender
  readonly recipient: string | null
}

const init: SwapState = {
  [Field.INPUT]: {
    currencyId: "123",
  },
  [Field.OUTPUT]: {
    currencyId: "456",
  },
  typedValue: "value",
  independentField: Field.INPUT,
  recipient: "reci"
}

export default createReducer<SwapState>(init, (builder) => {
  builder
    .addCase(selectCurrency, (state, {payload: { field, currencyId }}) => {
      console.log(state.typedValue)
      return {
        ...state,
        [field]: { currencyId },
      }
    })

    .addCase(typeInput, (state, {payload: { field, typedValue }}) => {
      return {
        ...state,
        independentField: field,
        typedValue,
      }
    })

    .addCase(setRecipient, (state, {payload: { recipient }}) => {
      state.recipient = recipient
    })
  }
)

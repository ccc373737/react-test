import { createAction } from '@reduxjs/toolkit'

export enum Field {
    INPUT = 'INPUT',
    OUTPUT = 'OUTPUT',
}

//创建action
export const selectCurrency = createAction<{ field: Field, currencyId: string }>('mint2/selectCurrency2')
export const typeInput = createAction<{ field: Field, typedValue: string }>('mint2/typeInput')
export const setRecipient = createAction<{ recipient: string | null }>('mint2/setRecipient')

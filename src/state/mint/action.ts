export enum Field {
    INPUT = 'INPUT',
    OUTPUT = 'OUTPUT',
}

//创建action
export function selectCurrency(field: Field, currencyId: string) {
    return { type: "selectCurrency", field, currencyId }
}

export function typeInput(field: Field, typedValue: string) {
    return { type: "typeInput", field, typedValue }
}

export function setRecipient(recipient: string | null) {
    return { type: "setRecipient", recipient}
}
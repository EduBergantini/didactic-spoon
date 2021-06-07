const formatToCurrency = (amount: number): string => {
    return amount.toLocaleString("pt-BR", {style: "currency", currency: "BRL"})
}

export default formatToCurrency;
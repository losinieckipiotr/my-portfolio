const defaultSizes = [500, 750, 1000, 1500, 2500]

const getUrlWithSize = (url: string, size: number) => `${url}?format=${size}w`
const getSrcSetItem = (urlWithSize: string, size: number) => `${urlWithSize} ${size}w`
const getSrcSet = (srcSetItems: string[]) => srcSetItems.join(', ')

export const getSrcAttr = (url: string, sizes = defaultSizes) => {
	const srcItems = sizes
	.map((size) => {
		const urlWithSize = getUrlWithSize(url, size)
		return getSrcSetItem(urlWithSize, size)
	})
	return getSrcSet(srcItems)
}

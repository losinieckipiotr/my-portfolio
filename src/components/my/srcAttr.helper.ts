const defaultSizes = [500, 750, 1000, 1500, 2500]

const squareSpaceUrl = 'https://images.squarespace-cdn.com/content/v1/5cdc8db64d546e01b837cea4/';

const getUrlWithSize = (url: string, size: number) => `${squareSpaceUrl}${url}?format=${size}w`
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

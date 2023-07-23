import { getSrcAttr } from "./srcAttr.helper";

const peaks = '1562102954840-OPQ2S3VR9JDZS2XLMAAT/65.jpg';
const coast = '1562710303726-HN4N2S110UN9FFW6SQ9K/1.jpg';
const wildlife = '1562710337910-ETNNKGNBU2IPDFJFZAC7/3.jpg';
const seafaring = '1562710379262-HJY43PPFCTN2331DQ67P/73.jpg';
const horizon = '1562710947533-PD7S2GHDGL0WJXMOCTUR/download+%2811%29.jpeg';
const landscape = '1562711000974-0Z9GVJLOW0FAYD6EOKNL/download.jpeg';
const crystals = '1562711028613-KPB6JJZAWCM4GARBNC9E/77.jpg';
const wharf = '1562711143537-Y34EGHLSFXS8JGD7ONO2/47.jpg';
const dock = '1562711110689-CTJYO7N1U2Z5B96KOGUU/36.jpg';

class Work {
	title: string;
	href: string;
	srcset: string;

	constructor (title: string, path: string, imgUrl: string) {
		this.title = title;
		this.href = '/my-portfolio/mywork/' + path
		this.srcset = getSrcAttr(imgUrl, [500, 750])
	}
}

export interface ImgData {
	title: string;
	href: string;
	srcset?: string;
	alt?: string;
}

class WroksBuilder {

	private works: ImgData[] = [];

	addWork(img: Work) {
		this.works.push({
			alt: '',
			...img
		})

		return this
	}

	build() {
		return this.works;
	}
}

const builder = new WroksBuilder();

export const works: Readonly<ImgData[]> = builder
	.addWork(new Work('Pagóry', 'peaks', peaks))
	.addWork(new Work('Piaseczki', 'coast', coast))
	.addWork(new Work('Dziki źwież', 'wildlife', wildlife))
	.addWork(new Work('Parawany', 'seafaring', seafaring))
	.addWork(new Work('Płaska ziemia', 'horizon', horizon))
	.addWork(new Work('Rodzinne strony Bonda', 'landscape', landscape))
	.addWork(new Work('Interstellar', 'crystals', crystals))
	.addWork(new Work('Schody do wody', 'wharf', wharf))
	.addWork(new Work('Łoweczki', 'dock', dock))
	.build();

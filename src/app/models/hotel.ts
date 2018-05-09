export class Hotel {
    constructor(
        public name: string,
        public amenities: string[],
        public stars: number,
        public image: string,
        public price: boolean
    ) {}
}
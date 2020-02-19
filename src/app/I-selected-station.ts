export interface Station {
    id: number;
    stationName: string;
    gegrLat: string;
    gegrLon: string;
    city: {
        id: number;
        name: string;
        commune: {
            communeName: string;
            districtName: string;
            provinceName: string;
        }
    }
    addressStreet: any;
}
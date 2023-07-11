
export interface WeatherData {
    weather : Weather[];
    main: TempInformation; // temp informations and humidity 
    wind: Wind; // wind informations speed and degree
    id:number;
    name:string;
    }
    
    interface TempInformation {
        temp: number;
        feels_like: number;
        temp_min: number;
        temp_max: number;
        humidity: number;
    }
    
    interface Weather {
       id:number;
       main: string;
       description:string;
    }
    
    interface Wind {
        speed:number;
        deg:number;
    }
    
    
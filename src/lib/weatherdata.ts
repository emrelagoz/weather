
export interface WeatherData {
    weather : Weather[];
    main: Main;
    wind: Wind;
    id:number;
    name:string;
    }
    
    interface Main {
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
    
    
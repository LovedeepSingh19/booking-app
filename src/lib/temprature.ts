export const tempratureFunction = async (coords: GeolocationCoordinates) => {
    const response = await fetch(
        `http://api.weatherapi.com/v1/forecast.json?q=${coords?.latitude},${coords?.longitude}&key=${process.env.NEXT_PUBLIC_WEATHER_API_KEY}`
      );
      const data = await response.json();
    //   setCity(data.location.name)
    //   setTemp(data.current.temp_c)
      return [data.location.name, data.current.temp_c]
}
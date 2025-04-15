import fetchData from "./fetchData";


const OnTheAirSeries = async (page: number) => {
    const onTheAir = await fetchData(
        `/tv/on_the_air?language=en-US&page=${page}`
    );
    return onTheAir;
}

export default OnTheAirSeries;
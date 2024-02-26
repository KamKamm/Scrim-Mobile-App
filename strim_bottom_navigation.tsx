import { useState } from "react";
import { BottomNavigation } from "react-native-paper";
import WebView from "react-native-webview";

const HomeRoute = () => <WebView
    source={{ uri: 'https://strimafrica.com/' }}
    style={{ flex: 1 }}
/>;

const MovieRoute = () => <WebView
    source={{ uri: 'https://strimafrica.com/movies' }}
    style={{ flex: 1 }}
/>;

const TVShowRoute = () => <WebView
    source={{ uri: 'https://strimafrica.com/shows' }}
    style={{ flex: 1 }}
/>;

const EntertainmentRoute = () => <WebView
    source={{ uri: 'https://strimafrica.com/sports' }}
    style={{ flex: 1 }}
/>;

const StrimBottomNavigation = () => {

    const [index, setIndex] = useState(0);
    const [routes] = useState([
        { key: 'home', title: 'Home', focusedIcon: 'home', unfocusedIcon: 'home-outline' },
        { key: 'movies', title: 'Movies', focusedIcon: 'movie', unfocusedIcon: 'movie-outline' },
        { key: 'tvshows', title: 'TV Shows', focusedIcon: 'movie-play', unfocusedIcon: 'movie-play-outline' },
        { key: 'entertainment', title: 'Entertainment', focusedIcon: 'video-vintage', unfocusedIcon: 'video-wireless-outline' },
    ]);

    const renderScene = BottomNavigation.SceneMap({
        home: HomeRoute,
        movies: MovieRoute,
        tvshows: TVShowRoute,
        entertainment: EntertainmentRoute,
    });

    return (
        <BottomNavigation
            navigationState={{ index, routes }}
            onIndexChange={setIndex}
            renderScene={renderScene}
        />
    )
}

export default StrimBottomNavigation;
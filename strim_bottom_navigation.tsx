import { useState } from "react";
import { BottomNavigation } from "react-native-paper";
import WebView from "react-native-webview";

const HomeRoute = () => <WebView
    source={{ uri: 'https://strimafrica.com/' }}
    style={{ flex: 1 }}
/>;

const LoginRoute = () => <WebView
    source={{ uri: 'https://strimafrica.com/login' }}
    style={{ flex: 1 }}
/>;

const MovieRoute = () => <WebView
    source={{ uri: 'https://strimafrica.com/movies' }}
    style={{ flex: 1 }}
/>;

const LiveTVRoute = () => <WebView
    source={{ uri: 'https://strimafrica.com/sports' }}
    style={{ flex: 1 }}
/>;

const SearchRoute = () => <WebView
    source={{ uri: 'https://strimafrica.com/#popup1' }}
    style={{ flex: 1 }}
/>;

const StrimBottomNavigation = () => {

    const [index, setIndex] = useState(0);
    const [routes] = useState([
        { key: 'home', title: 'Home', unfocusedIcon: 'home', focusedIcon: 'home-outline' },
        { key: 'login', title: 'Login', unfocusedIcon: 'login', focusedIcon: 'login-variant' },
        { key: 'movies', title: 'Movies', unfocusedIcon: 'movie', focusedIcon: 'movie-outline' },
        { key: 'livetv', title: 'Live TV', unfocusedIcon: 'movie-play', focusedIcon: 'movie-play-outline' },
        { key: 'search', title: 'Search', focusedIcon: 'search-web', unfocusedIcon: 'search-web' },
    ]);

    const renderScene = BottomNavigation.SceneMap({
        home: HomeRoute,
        login: LoginRoute,
        movies: MovieRoute,
        livetv: LiveTVRoute,
        search: SearchRoute,
    });

    return (
        <BottomNavigation
            navigationState={{ index, routes }}
            onIndexChange={setIndex}
            renderScene={renderScene}
            barStyle={{ backgroundColor: '#8A0000' }}
            theme={{colors: {secondaryContainer: '#ff0000'}}}
        />
    )
}

export default StrimBottomNavigation;
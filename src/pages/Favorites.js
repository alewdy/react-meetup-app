import { useContext } from "react";

import FavoritesContext from "../store/favorites-context";
import MeetupList from "../components/meetups/MeetupList";
import classes from './styles/Favorites.module.css'

function FavoritesPage() {
    //Current Favorites snapshot
    const favoriteCtx = useContext(FavoritesContext);

    let content;

    if (favoriteCtx.totalFavorites === 0) {
        content = <p>You've got no favorites yet. Start adding some?</p>
    } else {
        content = <MeetupList meetups={favoriteCtx.favorites} />
    }

    return <section>
        <h1 className={classes.title}>My Favorites</h1>
        {content}
    </section>
}

export default FavoritesPage;
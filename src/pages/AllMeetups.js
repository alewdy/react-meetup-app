import { useState, useEffect } from "react";

import MeetupList from "../components/meetups/MeetupList";
import classes from './styles/AllMeetups.module.css'

function AllMeetupsPage() {
  const [isLoading, setisLoading] = useState(true);
  const [loadedMeetups, setLoadedMeetups] = useState([]);

  useEffect(() => {
    setisLoading(true);
    fetch(
      "https://react-meetups-app-aa687-default-rtdb.firebaseio.com/meetups.json"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const meetups = [];

        // Transforms data object from firebase into the array we need for MeetupList component
        for (const key in data) {
          const meetup = {
            id: key,
            ...data[key]
          };

          meetups.push(meetup);
        }

        setisLoading(false);
        setLoadedMeetups(meetups);
      });
  }, []);

  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }

  return (
    <section>
      <h1 className={classes.title}>All Meet ups</h1>
      <MeetupList meetups={loadedMeetups} />
    </section>
  );
}

export default AllMeetupsPage;

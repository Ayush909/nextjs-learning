import React from "react";
import { getFeaturedEvents } from "../dummy-data";
import EventList from "@/components/event-list";

const HomePage = () => {
  const featuredEvents = getFeaturedEvents();
  return (
    <>
      <EventList items={featuredEvents} />
    </>
  );
};

export default HomePage;

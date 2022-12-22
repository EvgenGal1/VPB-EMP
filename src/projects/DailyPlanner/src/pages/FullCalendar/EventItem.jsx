export const EventItem = ({ info }) => {
  const { event } = info;
  return (
    <div>
      <p>{event.title}</p>
      {/* <p>{event.info}</p> */}
      {/* <p>{event.name}</p> */}
    </div>
  );
};

type personNameListProps = {
  names: {
    first: string;
    last: string;
  }[];
};
export const PersonList = (props: personNameListProps) => {
  return (
    <div>
      <h1>PersonList</h1>
      {props.names.map((item) => {
        return (
          <>
            <h1>{item?.first}</h1>
            <h1>{item?.last}</h1>
          </>
        );
      })}
    </div>
  );
};

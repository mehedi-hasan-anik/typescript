import { PersonProps } from "../../Interface/Interface";

export const Person = (props: PersonProps) => {
  return (
    <div>
      <h1>
        {props.name.first} {props.name.last}
      </h1>
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

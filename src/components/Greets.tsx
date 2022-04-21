type GreetsTypes = {
  name: string;
  messgaeCount: number;
  isLogeding: boolean;
};

export const Greets = (props: GreetsTypes) => {
  return (
    <div>
      {props?.isLogeding ? (
        <>
          <h1>Greets {props.name}</h1>
          <h1>{props.messgaeCount}</h1>
        </>
      ) : (
        <h1>nothing</h1>
      )}
    </div>
  );
};

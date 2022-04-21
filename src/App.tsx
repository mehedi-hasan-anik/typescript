import "./App.css";
import { Status } from "./components/Status";

const App = () => {
  const personName = {
    first: "test",
    last: "test",
  };

  const nameList = [
    {
      first: "test",
      last: "test",
    },
    {
      first: "test",
      last: "test",
    },
    {
      first: "test",
      last: "test",
    },
  ];

  return (
    <div className="App">
      {/* <Greets name="test" messgaeCount={10} isLogeding={true} />
      <Person name={personName} names={nameList} />
      <PersonList names={nameList} /> */}
      <Status />
    </div>
  );
};

export default App;

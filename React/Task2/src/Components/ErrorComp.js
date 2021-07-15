import { NavLink as Link,useHistory } from "react-router-dom";

const ErrorComp = () => {

  const { push } = useHistory()

  return (
    <div>
      {" "}
      <h1>Error</h1>
      <button className="btn btn-primary"     onClick={() => push('/')}
>
        Back To Home
      </button>
    </div>
  );
};

export default ErrorComp;

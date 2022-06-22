import { useToggle, useLocalStorage } from "../hooks";
import { useMedia } from "../hooks/useMedia";
const Hooks = () => {
  const { isToggled, toggle } = useToggle(true);
  const [age, setAge, removeAge] = useLocalStorage("age", 38);
  const {isMobile, screenHeight, screenWidth} = useMedia()
  return (
    <div>
      <h1>Hooks</h1>
      {/* 1 */}
      <div className="demo-container">
        <h3>useToggle hook</h3>
        <div className="demo-body">
          {isToggled && <p>show/hide this</p>}
          <button onClick={toggle}>toggle</button>
        </div>
      </div>

      {/* 2 */}
      <div className="demo-container">
        <h3>useLocalStorage hook</h3>
        <div className="demo-body">
          <p>my age: {age}</p>
          <button onClick={() => setAge(parseInt(age) + 1)}>add to age</button>
          <button onClick={removeAge}>Remove from localstorage</button>
          <p>age from local storage</p>
          <p>{window.localStorage.getItem('age')}</p>
        </div>
      </div>

      {/* 3 */}
      <div className="demo-container">
        <h3>useMedia hook</h3>
        <div className="demo-body">
           {isMobile ? <p>mobile size yo</p> : <p>not mobile size</p>}
           <p>screenWidth: {screenWidth}</p>
           <p>screenHeight: {screenHeight}</p>
        </div>
      </div>
    </div>
  );
};
export default Hooks;

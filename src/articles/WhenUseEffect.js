function WhenUseEffect() {
  return (
    <>
      <h1>When the hell to use useEffect hook</h1>
      <p>Let me try to convincingly attempt to explain when to use useEffect. I </p>
      <h2>What Ill Cover:</h2>
      <ul>
        <li>What is useEffect</li>
        <li>What is a hook</li>
        <li>Examples of when to use useEffect</li>
        <li>What to learn next</li>
      </ul>
      <h2>What is useEffect</h2>
      <p>useEffect is a React hook. Along with useState it is among the first hook's you will learn if you are following the <a href="https://reactjs.org/docs/getting-started.html">offical React 'getting started' guide</a>. Here we will try to explain what useEffect is and when you should use it.</p>
      <p>useEffect handles side-effects to the state in a component.</p>
      <h2>What are Hooks?</h2>
      <p>Hooks were added in React 16.8 and took away the burden (well, for me) of writing React class compoents to store the State. With useState hook we can handle the state in a regular old javascript function, and useEffect allows us to more easily manipulate state in a controlled way.</p>
      <p>Some of the other React Hooks include:</p>
      <ul>
        <li>useContext</li>
        <li>useRef</li>
        <li>useReducer</li>
      </ul>
      <p>And so on. But mastering useState and useEffect will help with most small projects and thats where we are going to get started</p>
      <h2>Examples of useEffect</h2>
      <h3>Counter</h3>
      <p>The most simple and best example given by React themsevles in the documentation is a counter. So lets see that one first.</p>
      {/* 1# Counter example */}
      <h3>API</h3>
      <p>The first example that comes to my mind and probably the one use case I have found most useful is handling api calls.</p>
      {/* 2# Api example */}
    </>
  )
}

export default WhenUseEffect;
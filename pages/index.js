function HomePage() {
  return (
    <div
      style={{
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center'
      }}
    >
      <h1 style={{ fontFamily: 'monospace', color: 'blue' }}>
        The pokemon website
      </h1>
      <h2
        style={{
          fontFamily: 'monospace',
          color: 'rgb(243, 103, 123)',
          marginBottom: '10rem'
        }}
      >
        There are some funny buttons below.....
      </h2>
      <button
        style={{
          fontFamily: 'monospace',
          padding: '1rem',
          fontSize: '2rem',
          background: 'orange',
          color: 'black'
        }}
        onClick={() => alert('Welcome to the pokemon website! ')}
      >
        Welcome
      </button>
      <button
        style={{
          fontFamily: 'monospace',
          padding: '1rem',
          fontSize: '2rem',
          background: 'green',
          color: 'black',
          marginTop: '2rem'
        }}
        onClick={() => {
          let name = prompt("What's your name?");
          if (name) {
            alert('Welcome, ' + name + '!');
          } else {
            alert('Please, type in your name');
          }
        }}
      >
        {"What's your name?"}
      </button>
    </div>
  );
}
      <button
        style={{
          fontFamily: 'monospace',
          padding: '1rem',
          fontSize: '2rem',
          background: 'blue',
          color: 'white'
        }}
        onClick={() => alert('Subscribe me! https://www.youtube.com/channel/UCWr97tXZAnMNwTlelL-G8bg ')}
      >
        Click This Button
      </button>
    </div>

export default HomePage;

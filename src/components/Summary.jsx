const Summary = () => {
  return (
    <div className="grid grid-cols-4 gap-4 max-w-5xl mx-auto">

      <div className="p-4 shadow rounded text-center">
        <h1 className="text-2xl font-bold">10</h1>
        <p>Total Friends</p>
      </div>

      <div className="p-4 shadow rounded text-center">
        <h1 className="text-2xl font-bold">3</h1>
        <p>On Track</p>
      </div>

      <div className="p-4 shadow rounded text-center">
        <h1 className="text-2xl font-bold">6</h1>
        <p>Need Attention</p>
      </div>

      <div className="p-4 shadow rounded text-center">
        <h1 className="text-2xl font-bold">12</h1>
        <p>Interactions</p>
      </div>

    </div>
  );
};

export default Summary;
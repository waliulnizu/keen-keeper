const Summary = ({ friends = [] }) => {

  const totalFriends = friends?.length ?? 0;

  const onTrack = friends?.filter(f => f.status === "on-track").length ?? 0;

  const needAttention = friends?.filter(f => f.status === "need-attention").length ?? 0;

  const interactions = friends?.reduce((acc, f) => {
    return acc + (f.interactions || 0);
  }, 0) ?? 0;

  const isEmpty = friends.length === 0;

  return (
    <div className="grid grid-cols-4 gap-4 max-w-5xl mx-auto">

      <div className="p-4 shadow rounded text-center">
        <h1 className="text-2xl font-bold">
          {isEmpty ? "-" : totalFriends}
        </h1>
        <p>Total Friends</p>
      </div>

      <div className="p-4 shadow rounded text-center">
        <h1 className="text-2xl font-bold">
          {isEmpty ? "-" : onTrack}
        </h1>
        <p>On Track</p>
      </div>

      <div className="p-4 shadow rounded text-center">
        <h1 className="text-2xl font-bold">
          {isEmpty ? "-" : needAttention}
        </h1>
        <p>Need Attention</p>
      </div>

      <div className="p-4 shadow rounded text-center">
        <h1 className="text-2xl font-bold">
          {isEmpty ? "-" : interactions}
        </h1>
        <p>Interactions</p>
      </div>

    </div>
  );
};

export default Summary;
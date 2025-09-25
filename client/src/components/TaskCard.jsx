
export function TaskCard({task}) {
  return (
    <div
      style={{
        border: '1px solid white',
        marginBottom: '10px',
        padding: '10px',
      }}
    >
      <h3>{task.title}</h3>
      <p>{task.description}</p>
    </div>
  );
}


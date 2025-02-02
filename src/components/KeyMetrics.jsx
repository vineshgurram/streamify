export default function KeyMetrics({name,no}) {
  return (
    <div className="bs-card typ-key-metrics">
      <p className="bs-para typ500">{name}</p>
      <h3 className="bs-heading typ25 typ600">{no}</h3>
    </div>
  );
}

import "../styles/aside.css";

const Aside = () => {
  const items = [
    { icon: "📊", label: "Progress" },
    { icon: "📈", label: "Statistic" },
    { icon: "📝", label: "Notes" },
    { icon: "✏️", label: "Highlights" },
  ];

  return (
    <aside className="aside">
      {items.map((item, index) => (
        <div key={index} className="aside-item">
          <span className="aside-icon">{item.icon}</span>
          <span className="aside-label">{item.label}</span>
        </div>
      ))}
    </aside>
  );
};

export default Aside;


import { useEffect, useRef, useState } from "react";

function SkillBar({ skill, percentage }) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="mb-6">
      <div className="flex justify-between mb-1">
        <span className="text-sm font-medium text-black">{skill}</span>
        <span className="text-sm font-medium text-black">{percentage}%</span>
      </div>
      <div className="w-full bg-purple-100 rounded-full h-3">
        <div
          className="bg-blue-950 h-3 rounded-full transition-all duration-[1500ms]"
          style={{ width: isVisible ? `${percentage}%` : "0%" }}
        ></div>
      </div>
    </div>
  );
}

export default SkillBar;

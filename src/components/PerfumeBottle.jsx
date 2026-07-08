export default function PerfumeBottle({ color = '#C9A96E', size = 120 }) {
  return (
    <svg
      width={size}
      height={size * 1.4}
      viewBox="0 0 100 140"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="35" y="5" width="30" height="12" rx="2" fill={color} opacity="0.8" />
      <rect x="42" y="0" width="16" height="8" rx="3" fill={color} opacity="0.6" />
      <path
        d="M30 20 L25 40 L25 120 Q25 130 35 130 L65 130 Q75 130 75 120 L75 40 L70 20 Z"
        fill={color}
        opacity="0.15"
        stroke={color}
        strokeWidth="1.5"
      />
      <path d="M30 20 L70 20" stroke={color} strokeWidth="1.5" />
      <ellipse cx="50" cy="80" rx="18" ry="25" fill={color} opacity="0.1" />
      <rect x="44" y="95" width="12" height="2" rx="1" fill={color} opacity="0.3" />
    </svg>
  )
}

import './SelectBox.css';

type SelectBoxProps = {
  value: number;
  choices: {name: string; value: number}[];
  onChange: (value: number) => void;
};

export default function SelectBox({choices, value, onChange}: SelectBoxProps) {
  return (
    <div className="select">
      <select value={value} onChange={(e) => onChange(+e.target.value)}>
        {choices.map((c, i) => (
          <option key={i} value={c.value}>
            {c.name}
          </option>
        ))}
      </select>
    </div>
  );
}

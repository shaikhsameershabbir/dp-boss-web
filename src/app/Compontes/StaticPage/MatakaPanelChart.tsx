const charts = [
  "Time Chart",
  "Sridevi Chart",
  "Kalyan Morning Chart",
  "Madhuri Chart",
  "Kalyan Chart",
  "Sridevi Night Chart",
  "Kalyan Night Chart",
  "Old Main Mumbai Chart",
  "Main Bazar Chart",
  "Milan Morning Chart",
  "Milan Day Chart",
  "Milan Night Chart",
  "Madhuri Night Chart",
  "Madhur Morning Chart",
  "Madhur Day Chart",
  "Madhur Night Chart",
  "Rajdhani Night Chart",
];

export const MatakaPanelChart = () => {
  return (
    <div className="max-w-full mx-auto p-2">
      <div className="border-[2px] border-[#c20094] rounded-[14px] overflow-hidden">
        <div className="text-2xl font-bold border-3 border-[#ffff] rounded-[10px] bg-[#ff00a2]">
          <h3
            className="text-white italic font-bold text-center"
            style={{ textShadow: "2px 2px 4px black" }}
          >
            MATKA PANEL CHART 
          </h3>
        </div>
        <ul className="bg-[#ffcaa6] border-t border-[#c20094]">
          {charts.map((chart, index) => (
            <li
              key={index}
              className="border-t-2 border-[#460a74] text-center text-[20px] italic font-bold text-[#1a237e]"
            >
              <a href="#" className="block w-full py-1">
                {chart}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

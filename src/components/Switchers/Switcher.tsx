import { useState } from 'react';

const Switcher = () => {
  const [enabled, setEnabled] = useState(false);

  return (
    <div x-data="{ switcherToggle: false }">
      <label
        htmlFor="toggle2"
        className="flex cursor-pointer select-none items-center"
      >
        <div className="flex items-center relative">
          <input
            id="toggle2"
            type="checkbox"
            className="sr-only"
            onChange={() => {
              setEnabled(!enabled);
            }}
          />
          <div className="h-3 w-7 rounded-full bg-meta-9 shadow-inner dark:bg-[#5A616B]"></div>
          <div
            className={`dot absolute left-0 h-3 w-3 rounded-full bg-white shadow-switch-1 transition ${enabled && '!right-0 !translate-x-full !bg-primary dark:!bg-white'
              }`}
          ></div>
        </div>
      </label>
    </div>
  );
};

export default Switcher;

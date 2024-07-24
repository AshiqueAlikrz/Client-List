import * as React from "react";

export default function DatePickerComponent({dateLabel}) {
  return (
    <div className="relative">
      <input className="date-input border rounded-lg px-8 py-4 mt-1 text-sm w-full text-transparent" type="date" placeholder="Start Date" />
      <label className="absolute left-6 top-5 text-gray-500 text-base pointer-events-none transition-transform duration-200 ease-in-out transform origin-top-left">
        {dateLabel}
      </label>
    </div>
  );
}

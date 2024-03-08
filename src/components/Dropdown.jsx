import { useState } from "react";


//TODO - need to fix look of drop down menu

function Dropdown({ options, dropdownName}) {
  const [isOpen, setIsOpen] = useState(false);

  function handleDropdownOpen() {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <div className="relative">
        <button
          onClick={handleDropdownOpen}
          className="inline-flex items-center justify-center px-4 py-2 bg-gray-500 text-white rounded-md"
        >
          {dropdownName}
        </button>
        {isOpen ? (
          <div className="absolute top-full mt-1 w-48 bg-white border border-gray-300 rounded-md shadow-lg">
            <ul className='max-w-md'>
              {options.map((option, index) => (
                <li
                  key={index}
                  className="px-4 py-2 cursor-pointer hover:bg-gray-100 whitespace-normal w-full"
                >
                  {option}
                </li>
              ))}
            </ul>
          </div>
        ) : null}
      </div>
    </>
  );
};

export default Dropdown;
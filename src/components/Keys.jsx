import React from 'react'

const Keys = ({label, keyClass, onButtonClick}) => {

const equalClass = "col-span-2 bg-[#4ccdc6] text-[#1a261a] font-semibold hover:bg-[#4CCDC6]";

    return (
    <div className={` bg-[#141414] flex justify-center items-center cursor-pointer p-4 rounded hover:bg-[#4ccdc542] ${keyClass && equalClass}`}
    onClick={() => onButtonClick(label)}>
      {label}
    </div>
  )
}

export default Keys

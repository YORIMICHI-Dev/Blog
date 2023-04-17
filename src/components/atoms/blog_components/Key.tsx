interface KeyProps {
    children: React.ReactNode;
}


const Key = ({children}: KeyProps) => {
    return (
        <div className="inline-block px-2 py-1 border-2 mx-2 border-gray-300 bg-gray-100 rounded-lg shadow-md">
          <div className="text-xl text-veryDarkBlue font-semibold">{children}</div>
        </div>
      );
}

export default Key;
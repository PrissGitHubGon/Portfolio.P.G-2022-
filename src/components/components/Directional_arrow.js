const DirectionalArrow = (props) => {
  const { rightLink, leftLink, rightTitle, leftTitle } = props;
  return (
    <div className="flex justify-between">
      {rightLink ? (
        <a href={rightLink}>
          <i className="fa-regular fa-hand-point-left text-4xl pl-5 bg-clip-text text-transparent bg-gradient-to-r from-red-900 via-orange-800 to-amber-700  hover:text-green-900 "></i>
          <p className="text-center pl-4 italic bg-clip-text text-transparent bg-gradient-to-r from-red-900 via-orange-800 to-amber-700 font-bold">
            {rightTitle}
          </p>
        </a>
      ) : (
        ""
      )}

      {leftLink ? (
        <a href={leftLink}>
          <i className="fa-regular fa-hand-point-right text-4xl pr-5 bg-clip-text text-transparent bg-gradient-to-r from-red-900 via-orange-800 to-amber-700  hover:text-green-900 "></i>
          <p className="text-center pr-6 italic bg-clip-text text-transparent bg-gradient-to-r from-red-900 via-orange-800 to-amber-700 font-bold ">
            {leftTitle}
          </p>
        </a>
      ) : (
        ""
      )}
    </div>
  );
};

export default DirectionalArrow;

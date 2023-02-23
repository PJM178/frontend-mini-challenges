const Star = ({ index, starIndex, setStarIndex }) => {
  return (
    <li
      className={starIndex.currentIndex !== undefined ? index <= starIndex.currentIndex ? 'star-filled' : 'star-empty' : index <= starIndex.setIndex ? 'star-filled' : 'star-empty'}
      onMouseEnter={() => setStarIndex({ ...starIndex, currentIndex: index })}
      onMouseLeave={() => setStarIndex({ ...starIndex, currentIndex: undefined })}
      onMouseDown={() => setStarIndex({ ...starIndex, setIndex: index })}
    />
  );
};

export default Star;
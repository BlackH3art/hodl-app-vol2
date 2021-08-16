

const CryptoBubble = ({ classes, img, index }) => {

  const position = Math.ceil(Math.random() * 40);
  const delay = Math.ceil(Math.random() * index);
  const size = Math.ceil(Math.random() * 4);
  const duration = Math.random()


  return ( 
    <>
      <div className={classes} style={{ 
        backgroundImage: `url(${img})`,
        top: `${position < 14 ? 14 : position}rem`,
        animationDelay: `${delay}s`,
        height: `${size <= 1 ? 2 : size}rem`,
        width: `${size <= 1 ? 2 : size}rem`,
        animationDuration: `${duration <= 3 ? 4 + index / 2 : duration}s`,
        animationName: `${position % 2 ? "$fly1" : "$fly2"}`
      }}></div>
    </>
  );
}
 
export default CryptoBubble;
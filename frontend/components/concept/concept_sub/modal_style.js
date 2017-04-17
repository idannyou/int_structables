const ModalStyle = {
  overlay : {
    position        : 'fixed',
    top             : 0,
    left            : 0,
    right           : 0,
    bottom          : 0,
    backgroundColor : 'rgba(0,0,0,.8)',
    zIndex          : 10,
    padding         : 0
  },
  content : {
    position        : 'absolute',
    top             : '36px',
    left            : '50%',
    transform       : 'translateX(-50%)',
    bottom          : 'auto',
    zIndex          : 20,
    backgroundColor : 'transparent',
    border          : '1 px solid black'
  }
};
export default ModalStyle;

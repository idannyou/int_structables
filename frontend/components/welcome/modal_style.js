const ModalStyle = {
  overlay : {
    position        : 'fixed',
    top             : 0,
    left            : 0,
    right           : 0,
    bottom          : 0,
    backgroundColor : 'transparent',
    zIndex          : 10,
    padding         : 0

  },
  content : {
    position        : 'absolute',
    top             : '36px',
    left            : '50%',
    transform       : 'translateX(-50%)',
    bottom          : 'auto',
    backgroundColor : 'transparent',
    border          : 'none',
    width           : '322px',
    height          : '580px'
  }
};
export default ModalStyle;

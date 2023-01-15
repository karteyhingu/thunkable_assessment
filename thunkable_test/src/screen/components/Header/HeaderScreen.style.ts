import {ObjOfCss} from "../../../app-types";

const styles: ObjOfCss = {
  container: {
    height: "fit-content",
    padding: "15px",
    background: "#F7F9FD",
  },
  logo: {
    height: "32px",
    width: "32px"
  },
  text: {
    fontSize: "16px",
    color: "#424242",
    letterSpacing: "0.8px",
    textTransform: "uppercase",
    marginTop:"3%"
  },
  divider: {
    height: "0px",
    margin: "0px",
    padding:"0px"
  },
  addIconContainer: {
    background: "#4A475F",
    borderRadius: "50%",
    height: "50px",
    width: "50px",
    display: "flex",
    alignItems: "center",
    justifyContent: 'center'
  },
  hoverAddIcon:{
    background:"#3D3A4F"
  }
}

export default styles;

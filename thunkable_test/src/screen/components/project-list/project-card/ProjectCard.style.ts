import {ObjOfCss} from "../../../../app-types";

const styles: ObjOfCss = {
  container: {
    background: "#FDFDFD",
    display: "flex",
    flexDirection: "row",
    alignItems: 'center',
    justifyContent: "space-between",
    padding: "1%",
    width: "100%",
  },
  row:{
    width:"100%"
  },
  inputText: {
    padding: "7px",
    width: "100%",
    border: "1px solid #e9e9e9"
  },
  name: {
    fontSize: "20px",
    color: "#000000B2"
  },
  icons: {
    height: "30px",
    width: "30px",
    marginRight: "15px"
  },
  editIcon: {
    height: "24px",
    width: "24px",
    marginLeft: '10px'
  }
}

export default styles;

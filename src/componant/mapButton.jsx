import styles from "./tabMenu.module.css";
import Link from "next/link";

const btnStyle = {
  width: "200px",
  borderRadius: "3px",
  padding: "10px 40px",
  fontSize: "22px",
  fontWeight: "700",
  border: "0",
  color: "white",
  backgroundColor: "black",
};

export default function MapButton(props) {
  return (
    <Link href={props.href} target="_blank" >
      <button
        style={{
          ...btnStyle,
           backgroundColor: props.backgroundColor,
        }}
      >
        {props.btnName}
      </button>
    </Link>
  );
}

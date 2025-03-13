
import "../styles/buttons.css";

function Button(props) {
  return (
    <>
      <button
        onClick={() => {
          props.showForum();
        }}
      >
        أضــف فــائــدة
      </button>
    </>
  );
}

export default Button;

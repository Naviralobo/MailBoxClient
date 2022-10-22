import classes from "./Buttons.module.css";
import { useHistory } from "react-router-dom";

const Buttons = () => {
  const history = useHistory();
  const composeButtonHandler = () => {
    history.push("./composeMail");
  };
  return (
    <div>
      <button className={classes.composeButton} onClick={composeButtonHandler}>
        Compose
      </button>

      <div className={classes.views}>
        <div>Inbox</div>
        <div>Unread</div>
        <div>starred</div>
        <div>Drafts</div>
        <div>Sent</div>
        <div>Archive</div>
        <div>spam</div>
        <div>Deleted Items</div>
      </div>
      <div className={classes.views}>
        <div>views</div>
        <div>photos</div>
        <div>documents</div>
        <div>subscription</div>
        <div>deals</div>
        <div>Travel</div>
      </div>
      <div className={classes.views}>
        <div>Folders</div>
        <div>+New Folder</div>
      </div>
    </div>
  );
};

export default Buttons;

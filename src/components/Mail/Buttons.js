import classes from "./Buttons.module.css";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

const Buttons = () => {
  const history = useHistory();
  const unRead = useSelector((state) => state.mail.unread);
  const composeButtonHandler = () => {
    history.push("./composeMail");
  };
  return (
    <div>
      <button className={classes.composeButton} onClick={composeButtonHandler}>
        Compose
      </button>

      <div className={classes.views}>
        <div className={classes.unread}>
          <span>Inbox</span>
          <span>{unRead}</span>
        </div>
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

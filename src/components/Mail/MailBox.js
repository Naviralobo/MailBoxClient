import MailHeader from "./MailHeader";
import Buttons from "./Buttons";
import classes from "./MailBox.module.css";
import MailList from "./MailList";
import axios from "axios";
import { useSelector } from "react-redux";
const MailBox = () => {
  const reciever = localStorage.getItem("reciever");
  const userId = useSelector((state) => state.auth.userId);
  const mails = useSelector((state) => state.mail.mails);

  const mailList = mails.map((mail) => (
    <MailList
      subject={mail.subject}
      to={mail.to}
      id={mail.id}
      message={mail.message}
    />
  ));
  return (
    <div>
      <MailHeader />
      <div className={classes.main}>
        <div className={classes.buttons}>
          <Buttons />
        </div>
        <div className={classes.list}>{mailList}</div>
      </div>
    </div>
  );
};

export default MailBox;

import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { mailActions } from "../../store/MailSlice";
import { useHistory } from "react-router-dom";
import classes from "./MailList.module.css";
const MailList = (props) => {
  const reciever = useSelector((state) => state.auth.recieverId);
  const userId = useSelector((state) => state.auth.userId);
  const dispatch = useDispatch();
  const history = useHistory();
  const readMessageHandler = () => {
    axios
      .put(
        `https://mobile-chat-b9890-default-rtdb.firebaseio.com/mails/${reciever}${userId}/${props.id}.json`,
        {
          to: props.to,
          subject: props.subject,
          message: props.message,
          isRead: true,
          id: props.id,
        }
      )

      .then((res) => {
        dispatch(
          mailActions.updateMail({
            to: props.to,
            subject: props.subject,
            message: props.message,
            isRead: true,
            id: props.id,
          })
        );
      })
      .catch((err) => alert(err));
    history.push("./readMail");
  };

  return (
    <>
      <div className={classes.list} onClick={readMessageHandler}>
        {!props.isRead && <div className={classes.circle} />}
        <div className={classes.to}>{props.to}</div>
        <div>{props.subject}</div>
      </div>
    </>
  );
};
export default MailList;

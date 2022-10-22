import classes from "./MailList.module.css";
const MailList = (props) => {
  return (
    <div className={classes.list}>
      <div className={classes.to}>{props.to}</div>
      <div>{props.subject}</div>
    </div>
  );
};
export default MailList;

import classes from "./MailHeader.module.css";

const MailHeader = () => {
  const userId = localStorage.getItem("email");
  return (
    <div className={classes.header}>
      <h3>Yahoo!Mail</h3>
      <div className={classes.findText}>
        <input
          type="text"
          placeholder="Find messages,documents,photos or people"
        />
        <button className={classes.searchButton}>Search</button>
      </div>

      <div className={classes.userId}>{userId}</div>
    </div>
  );
};

export default MailHeader;

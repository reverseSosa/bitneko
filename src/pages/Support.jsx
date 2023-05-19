export const Support = () => {
  return (
    <div className="content justify-center align-center">
      <img className="background" src="/img/backlogos.svg" alt="background" />
      <div className="chatBox">
        <div className="chatArea">
          <span>Answer will take about 5 hours</span>
        </div>
        <div className="inputArea">
          <textarea
            className="message"
            placeholder="Enter your message here..."
          >
            {/* <img src="/img/send.svg" alt="send" /> */}
          </textarea>
        </div>
      </div>
    </div>
  );
};

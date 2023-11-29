function TransHist(){
    const ctx = React.useContext(UserContext);
    return (
      <>
      <h5>Transaction History</h5>
      {JSON.stringify(ctx)}<br/>
      </>
    );
  }